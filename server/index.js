import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 加载环境变量
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// 数据库配置
const dbConfig = {
  host: 'vsa-db-dev.cb462qmg6ec1.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'miniapp1',
  password: 'miniapp@20251',
  database: 'monster'
};

// 中间件
app.use(cors());
app.use(express.json());

// 创建数据库连接池
const pool = mysql.createPool(dbConfig);

// 初始化数据库表
async function initDatabase() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS waitlist_emails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
    console.log('数据库表初始化成功');
  } catch (error) {
    console.error('数据库表初始化失败:', error);
  }
}

// API路由
app.post('/api/waitlist', async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ success: false, message: '邮箱不能为空' });
  }
  
  try {
    const connection = await pool.getConnection();
    await connection.query(
      'INSERT INTO waitlist_emails (email) VALUES (?) ON DUPLICATE KEY UPDATE created_at = CURRENT_TIMESTAMP',
      [email]
    );
    connection.release();
    
    res.status(200).json({ 
      success: true, 
      message: '成功加入等待列表' 
    });
  } catch (error) {
    console.error('保存邮箱失败:', error);
    res.status(500).json({ 
      success: false, 
      message: '服务器错误，请稍后再试' 
    });
  }
});

// 获取等待列表数量
app.get('/api/waitlist/count', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM waitlist_emails');
    connection.release();
    
    res.status(200).json({ 
      success: true, 
      count: rows[0].count 
    });
  } catch (error) {
    console.error('获取等待列表数量失败:', error);
    res.status(500).json({ 
      success: false, 
      message: '服务器错误，请稍后再试' 
    });
  }
});

// 启动服务器
app.listen(PORT, async () => {
  await initDatabase();
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
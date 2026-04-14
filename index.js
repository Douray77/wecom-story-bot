process.on('SIGINT', () => {
  console.log('\n📤 收到 SIGINT 信号，正在关闭...');
  stopHeartbeat();
  if (ws) {
    ws.close();
  }
  process.exit(0);
});

// 启动应用
startServer();

// 导出模块（用于测试）
module.exports = { app, generateStory, submitToForm };

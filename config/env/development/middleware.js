module.exports = {
  settings: {
    cors: {
	    enabled: true,
      origin: ['*', 'https://numpi-web.vercel.app'],
      credentials: true,
      headers: [
        '*'
      ]
    }
  }
};
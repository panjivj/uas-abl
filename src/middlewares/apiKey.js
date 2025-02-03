const apiKeyMiddleware = (req, res, next) => {
    const apiKeys = process.env.API_KEYS.split(',');
    const clientApiKey = req.headers['x-api-key'];
    
    if (!clientApiKey || !apiKeys.includes(clientApiKey)) {
      return res.status(401).json({ 
        error: 'Invalid or missing API Key' 
      });
    }
    
    next();
  };
  
  module.exports = apiKeyMiddleware;
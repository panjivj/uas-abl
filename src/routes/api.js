const express = require('express');
const router = express.Router();
const apiKeyMiddleware = require('../middlewares/apiKey');
const authMiddleware = require('../middlewares/auth');
const { generateToken } = require('../utils/authUtils');
const bcrypt = require('bcryptjs')

// Contoh data user (biasanya disimpan di database)
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: '$2a$10$.rE7xYWxd377/NiaVSXcfu9oIuEUiP3QKnxyq/qr0kMqLxADAdniy' // password: 'secret'
  }
];

//router hash only
router.get('/hash',(req,res)=>{
  var salt = bcrypt.genSaltSync(10);
  var realPassword = "secret"
  var hash = bcrypt.hashSync(realPassword, salt);
  console.log('hash',hash)

  res.json({message:'hash success'});
})

//un-protect api
router.get('/un-protect',(req,res)=>{
  res.json({message:'Success Access API. Hello this is unprotect API'});
})

// Endpoint publik dengan API Key
router.get('/public', apiKeyMiddleware, (req, res) => {
  res.json({ message: 'Success Access API. This is Public endpoint with (API Key required)' });
});

// Login apiKeyMiddleware,
router.post('/login', apiKeyMiddleware, async (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email);
  // const password = users.find(u => u.password)
  console.log('user: ',user)
  // validate user exist
  if (!user) return res.status(400).json({ error: 'User not found' });

  //const validPassword = await bcrypt.compare(password, user.password);
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

  const token = generateToken(user);
  res.json({ token });
});

// Endpoint privat dengan JWT
router.get('/private', apiKeyMiddleware, authMiddleware, (req, res) => {
  res.json({ 
    message: 'Success access API, Private endpoint',
    user: req.user 
  });
});

module.exports = router;
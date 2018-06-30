import express from 'express';

const router = express.Router();

router.get('/navigation', (req, res) => {
  const navLinks = [
    {
      linkName: 'Class View',
      destination: 'class'
    }
  ]
  res.send(navLinks);
});

export default router;

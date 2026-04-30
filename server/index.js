import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  
  // Log the contact form submission
  console.log('Contact form submission:', { name, email, message })
  
  // In production, you would save to database or send email
  res.json({ 
    success: true, 
    message: 'Message received successfully!' 
  })
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

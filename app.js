require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { OpenAI } = require('openai'); // Import OpenAI class directly
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Setup multer for file upload
// const upload = multer({ storage: storage });

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  }
});

// const upload = multer({ 
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       const uploadDir = path.join(__dirname, 'uploads');
//       fs.mkdirSync(uploadDir, { recursive: true });
//       cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   })
// });

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Handle file upload and processing
app.post('/upload', upload.single('pdf'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Make the OpenAI API call
    const response = await openai.createCompletion({
      model: "gpt-4",  // Or use "gpt-3.5-turbo" if you prefer
      prompt: fileContent,
      max_tokens: 1000
    });

    fs.unlinkSync(filePath); // Clean up the file after processing

    res.json({
      text: response.choices[0].text // Correct access for completion response
    });
  } catch (error) {
    res.status(500).send(`An error occurred while processing the file. ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

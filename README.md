
# Resume Generator

**Resume Generator** is a web application that allows users to upload PDF files, extract their text content, and use AI (GPT-4) to generate insights or summaries. The application is built using Node.js, Express, and Multer, and provides a user-friendly interface for handling file uploads and processing.

## Features

- **PDF Upload**: Users can upload PDF files directly through the web interface.
- **Text Extraction**: Extracts text from uploaded PDF files.
- **AI Processing**: Uses GPT-4 to generate content or summaries based on the extracted text.
- **File Management**: Uploaded files are stored temporarily and cleaned up after processing.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd resume-generator
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the `server` directory with the following content:**

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

5. **Start the server:**

   ```bash
   cd server
   node app.js
   ```

   The server will run at `http://localhost:3000`.

## API Endpoints

- **POST /upload**: Uploads a PDF file. Requires `pdf` as the file field name in the form data. Responds with generated text or an error message.

## Usage

1. Open Postman or your preferred API testing tool.
2. Set the method to POST and the URL to `http://localhost:3000/upload`.
3. Under the `Body` tab, select `form-data` and add a pdf key with the file type.
4. Choose a PDF file to upload and send the request.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License. Please look at the [LICENSE](LICENSE) file for details.

In this `README.md`, replace `<repository-url>` with your repository URL. This file provides a comprehensive guide to setting up and using the Resume Generator application.
```

This `README.md` now includes all the necessary instructions and details for setting up and using the project, along with contributing and licensing information.

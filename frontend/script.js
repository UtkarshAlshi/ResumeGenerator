// script.js
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    const fileInput = document.getElementById('pdfFile');
    formData.append('pdf', fileInput.files[0]);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.text(); // Use .json() if your server returns JSON
        document.getElementById('response').textContent = result;
    } catch (error) {
        document.getElementById('response').textContent = `Error: ${error.message}`;
    }
});

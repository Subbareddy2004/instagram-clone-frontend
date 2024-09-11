document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://instagram-clone-backend.tirumalareddysai2004.workers.dev/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const data = await response.json();
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = `An error occurred: ${error.message}`;
    }
});

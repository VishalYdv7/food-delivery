import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        
        fetch('http://localhost:5000/api/hello')
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error('Error fetching data:', err));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Full-Stack Development with Vite</h1>
            <p>Message from Backend: {message}</p>
        </div>
    );
}

export default App;
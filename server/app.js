const express = require('express');
const https = require('https');
const path = require('path');
const app = express();

// FYI: `npx kill-port 8000`
const PORT = process.env.PORT || 8000;
const IS_DEV = process.env.NODE_ENV === 'development';

app.use(express.static(path.join(__dirname, '..', 'client')));

// Fallback route: Redirect to homepage
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at port ${PORT} in NODE_ENV: ${process.env.NODE_ENV}`);
    if (IS_DEV) {
        console.log(`⚡️[server]: Visit http://localhost:${PORT}`);
    }
});

https.createServer({}, app);
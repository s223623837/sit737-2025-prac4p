const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ 
            filename: 'logs/error.log', 
            level: 'error' 
        }),
        new winston.transports.File({ 
            filename: 'logs/combined.log' 
        }),
    ],
});

// Middleware to parse JSON bodies
app.use(express.json());

// Generic logging middleware
app.use((req, res, next) => {
    const startTime = Date.now();
    
    // Capture the original end function
    const originalEnd = res.end;
    
    // Override end function to log response details
    res.end = function (...args) {
        const duration = Date.now() - startTime;
        const logLevel = res.statusCode >= 400 ? 'error' : 'info';
        
        logger.log({
            level: logLevel,
            message: `${req.method} ${req.path} completed`,
            ip: req.ip,
            method: req.method,
            url: req.url,
            query: req.query,
            status: res.statusCode,
            duration: `${duration}ms`
        });
        
        originalEnd.apply(res, args);
    };
    
    next();
});

// Helper function to validate numbers
const validateNumbers = (num1, num2) => {
    return !isNaN(num1) && !isNaN(num2);
};

// API Endpoints
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    if (!validateNumbers(num1, num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const result = num1 + num2;
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    if (!validateNumbers(num1, num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const result = num1 - num2;
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    if (!validateNumbers(num1, num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const result = num1 * num2;
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    if (!validateNumbers(num1, num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }

    const result = num1 / num2;
    res.json({ result });
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.log({
        level: 'error',
        message: err.message,
        stack: err.stack,
        ip: req.ip,
        method: req.method,
        url: req.url
    });
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(port, () => {
    logger.log({
        level: 'info',
        message: `Calculator microservice listening at http://localhost:${port}`
    });
    console.log(`Calculator microservice listening at http://localhost:${port}`);
});
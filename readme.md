# SIT737-2025-Prac4P: Calculator Microservice

## Overview
This project is a simple calculator microservice developed for SIT737 Cloud Native Application Development. It uses Node.js and Express to provide basic arithmetic operations (addition, subtraction, multiplication, division) via REST API endpoints, with error handling and Winston logging for monitoring.

## Features
- REST API endpoints for basic arithmetic operations
- Input validation with meaningful error messages
- Request logging to console and files using Winston

## Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v14+ recommended)
- [Git](https://github.com)
- [Visual Studio Code](https://code.visualstudio.com/) or any IDE

## Step-by-Step Process Undertaken
Below is the detailed process I followed to build this microservice, covering Parts I, II, and III of the task sheet.

### Part I: Requirements
1. **Define API Format**:  
   - I decided to use a REST API with GET requests, accepting `num1` and `num2` as query parameters (e.g., `/add?num1=5&num2=3`).
2. **Plan Error Handling**:  
   - I planned to return JSON error messages for invalid inputs (e.g., non-numbers) and division by zero.

### Part II: Configure and Setup the Microservice
1. **Set Up Development Environment**:  
   - I downloaded and installed Node.js from `nodejs.org` to run JavaScript on the server, verifying it with `node -v`.  
   - I installed Visual Studio Code as my IDE to write, edit, and debug the code efficiently.
2. **Initialize Node.js Project**:  
   - I created a new directory for the project:  
     ```bash
     mkdir sit737-2025-prac4p
     cd sit737-2025-prac4p

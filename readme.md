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

## **Part I: Basic Arithmetic Operations**  

### **1. Set Up Development Environment**  
- Installed **Node.js**.  
- Installed a **code editor** like **Visual Studio Code**.  
- Installed **Git** for version control.  

### **2. Initialized Node.js Project**  
- Created a new folder for the project.  
- Ran `npm init -y` to create `package.json`.  
- Installed **Express.js** using `npm install express`.  

### **3. Designed API Endpoints**  
- Defined four endpoints:  
  - `/add` (for addition)  
  - `/subtract` (for subtraction)  
  - `/multiply` (for multiplication)  
  - `/divide` (for division)  
- Each endpoint accepted two query parameters: `num1` and `num2`.  

### **4. Implemented API Endpoints**  
- Used **Express.js** to handle HTTP requests.  
- Parsed input numbers from the request.  
- Performed the requested arithmetic operation.  
- Returned the result as a JSON response.  

### **5. Implemented Error Handling**  
- Validated that `num1` and `num2` were numbers.  
- Handled division by zero errors.  
- Returned proper HTTP status codes with meaningful error messages.  

---

## **Part II: Logging with Winston**  

### **6. Installed Winston Logging Library**  
- Ran `npm install winston` to install **Winston** for logging.  

### **7. Configured Winston Logger**  
- Created a new logger instance with:  
  - Console logging for development.  
  - File logging for **errors** and **all requests**.  

### **8. Integrated Logging into API**  
- Logged request details, including:  
  - Request method and URL.  
  - Input parameters (`num1`, `num2`).  
  - Operation performed.  
  - Response status and result.  

### **9. Tested Logging System**  
- Ran the application.  
- Checked the **logs/combined.log** file to verify logs.  
- Used `tail -f logs/combined.log` to view logs in real time.   


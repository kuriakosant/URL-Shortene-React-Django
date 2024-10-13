# **URL Shortener**

A **React-Django Full-Stack Application** for shortening long URLs into manageable short links. This project demonstrates the integration of a modern front-end built with React and a robust back-end powered by Django Rest Framework.

----------

## **Table of Contents**

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Setup Instructions](#setup-instructions)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Future Enhancements](#future-enhancements)
-   [Contact](#contact)

----------

## **Features**

-   Shorten long URLs into compact links.
-   User-friendly, modern UI with animations and responsive design.
-   Redirection support for shortened URLs.
-   Footer with app name, author details, and copyright notice.
-   Contact page with social links and user details.

----------

## **Technologies Used**

### **Frontend:**

-   React.js
-   React Router DOM for navigation.
-   Styled with CSS, animations, hover effects, and shadows for a polished look.

### **Backend:**

-   Django 4.1
-   Django Rest Framework for API handling.
-   SQLite for the database (easily switchable to other databases).

----------

## **Setup Instructions**

### Prerequisites:

-   Node.js (for frontend)
-   Python 3.10+ (for backend)

### Backend Setup:

1.  **Navigate to the backend directory**:
   
    `cd backend` 
    
2.  **Create a virtual environment**:

    `python3 -m venv venv
    source venv/bin/activate` 
    
3.  **Install dependencies**:

    `pip install -r requirements.txt` 
    
4.  **Apply migrations**:
    
    
    `python manage.py migrate` 
    
5.  **Run the server**:
    
    `python manage.py runserver` 
    

### Frontend Setup:

1.  **Navigate to the frontend directory**:

    `cd frontend` 
    
2.  **Install dependencies**:

    `npm install` 
    
3.  **Run the React app**:

    `npm start` 
  
----------

## **Usage**

1.  Open the app in your browser:
    
    -   Backend: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
    -   Frontend: http://localhost:3000/
2.  On the homepage, input a long URL and click "Shorten."
    
3.  Copy the generated shortened link and use it.
    

----------

## **Project Structure**


URL-Shortener/
│
├── backend/
│   ├── manage.py           # Django's entry point
│   ├── settings.py         # Backend configurations
│   ├── urls.py             # URL routing
│   ├── models.py           # Database models
│   └── templates/          # Backend templates
│
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React file
│   │   ├── Components/     # Reusable components (Header, Footer, etc.)
│   │   ├── Styles/         # CSS files for components
│   │   └── Pages/          # App pages (Home, About, Contact)
│   └── public/             # Static assets
│
└── README.md

----------

## **Future Enhancements**

-   User authentication to save and manage shortened URLs.
-   QR code generation for each shortened URL.
-   Analytics dashboard for tracking URL clicks.
-   Improved error handling and logging.

----------

## **Contact**

Author: **[KYRIAKOS ANTONIADIS]**  
GitHub: [kuriakosant](https://github.com/kuriakosant)  
Email: kuriakosant2003@gmail.com

----------

## **License**

This project is open-source and available under the MIT License.
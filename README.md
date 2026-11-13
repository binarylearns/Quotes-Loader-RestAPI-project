# QuoteNest – Daily Quote Generator

A simple and modern Daily Quote Generator built with **Django**, **Django REST Framework**, HTML, CSS, and JavaScript.

QuoteNest displays inspirational quotes one at a time through a clean frontend interface. It also includes a Django REST API for managing quote data.



![Uploading image.png…]()




## Features

- [x] Display inspirational quotes
- [x] Show one quote at a time
- [x] Load quotes from a local JSON file
- [x] Random quote selection
- [x] Responsive frontend design
- [x] Django REST Framework integration
- [x] Create quotes through the API
- [x] Read quotes through the API
- [x] Update quotes through the API
- [x] Delete quotes through the API

## Technologies Used

- **Backend:** Python, Django
- **API:** Django REST Framework
- **Frontend:** HTML, CSS, JavaScript
- **Data:** JSON and SQLite
- **Version Control:** Git and GitHub

## Project Structure

```text
QuoteNest/
│
├── manage.py
├── db.sqlite3
│
├── RestAPIP/
│
├── myRestAPP/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
│
└── frontend/
    ├── templates/
    │   └── index.html
    │
    └── static/
        ├── css/
        │   └── style.css
        │
        ├── js/
        │   └── script.js
        │
        └── data/
            └── quotes.json
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/binarylearns/QuoteNest-Django-REST-API.git
```

### 2. Navigate into the project

```bash
cd QuoteNest-Django-REST-API
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

Linux:

```bash
source venv/bin/activate
```

### 5. Install dependencies

```bash
pip install django djangorestframework
```

### 6. Apply migrations

```bash
python manage.py migrate
```

### 7. Start the development server

```bash
python manage.py runserver
```

Open your browser:

```text
http://127.0.0.1:8000/
```

## API

The Django REST API provides quote management functionality.

| Method | Purpose |
|---|---|
| GET | Retrieve quotes |
| POST | Create a quote |
| PUT/PATCH | Update a quote |
| DELETE | Delete a quote |

Main API endpoint:

```text
http://127.0.0.1:8000/quote/
```

## Learning Objectives

This project helped me practice:

- Building REST APIs with Django REST Framework.
- Working with Django models and serializers.
- Implementing CRUD operations.
- Fetching and displaying JSON data using JavaScript.
- Using asynchronous JavaScript with `async/await`.
- Manipulating the DOM dynamically.
- Organizing static files in Django.
- Using Git and GitHub for version control.

## Future Improvements

- [ ] Prevent consecutive duplicate random quotes.
- [ ] Add quote categories.
- [ ] Add a search functionality.
- [ ] Add a copy-to-clipboard button.
- [ ] Add a favorites feature.
- [ ] Connect the frontend directly to the Django REST API.
- [ ] Improve the UI with animations.

## Author

**binarylearns**

GitHub: https://github.com/binarylearns

---

*Built as a fun project to practice Django REST Framework and frontend development.*

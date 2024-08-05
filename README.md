### Project Description

#### Project Title: Next.js TODO App with Mock Authentication

**Description:**

The Next.js TODO App is a simple and user-friendly task management application built using the Next.js framework. The application allows users to add, edit, and delete tasks. The app also includes a mock authentication system, ensuring that only authenticated users can access the TODO list. Data persistence is achieved through the use of `localStorage`, so tasks are saved in the browser and retained even after a page refresh.

**Features:**

- **User Authentication:** Mock login system to secure the TODO list.
- **Task Management:** Add, edit, and delete tasks.
- **Data Persistence:** Tasks are saved in `localStorage`.
- **Responsive Design:** Clean and attractive UI with responsive design.
- **Navigation:** Easy navigation with links to Home and About pages.
- **Logout Functionality:** Users can log out, which redirects them to the login page.

### Project Structure

```
nextjs-todo-app/
│
├── components/
│   ├── NavBar.tsx
│   ├── TodoForm.tsx
│   └── TodoList.tsx
│
├── context/
│   └── AuthContext.tsx
│
├── pages/
│   ├── _app.tsx
│   ├── about.tsx
│   ├── index.tsx
│   └── login.tsx
│
├── public/
│   └── favicon.ico
│
├── styles/
│   └── globals.css
│
├── .gitignore
├── package.json
└── README.md
```

### Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nextjs-todo-app.git
   cd nextjs-todo-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Usage

1. **Authentication:**
   - Navigate to the login page: `/login`
   - Use the following credentials to log in:
     - **Username:** `user`
     - **Password:** `password`

2. **Task Management:**
   - After logging in, you will be redirected to the home page.
   - Add new tasks using the input field and the "Add TODO" button.
   - Edit tasks by clicking the "Edit" button, making changes, and saving them.
   - Delete tasks by clicking the "Delete" button.
   - Logout by clicking the "Logout" link in the navigation bar.

### Guidelines

1. **Project Initialization:**
   - Initialize a Git repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```

2. **Adding Remote Repository:**
   - Create a new repository on GitHub.
   - Add the remote repository:
     ```bash
     git remote add origin https://github.com/your-username/nextjs-todo-app.git
     git push -u origin master
     ```

3. **Feature Development:**
   - Create new branches for features or bug fixes:
     ```bash
     git checkout -b new-feature
     ```
   - After implementing changes, commit your work:
     ```bash
     git add .
     git commit -m "Implemented new feature"
     ```
   - Merge changes back to the main branch:
     ```bash
     git checkout master
     git merge new-feature
     ```

4. **Pull Requests (for team collaboration):**
   - Push your branch to GitHub:
     ```bash
     git push origin new-feature
     ```
   - Open a pull request on GitHub and request reviews from team members.

5. **Handling Environment Variables:**
   - Use `.env` file for environment-specific configurations.
   - Ensure `.env` is added to `.gitignore`.

### Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.



---

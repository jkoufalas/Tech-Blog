# Tech Blog

## Description

This is a web site is used as a daily planner.

### User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

- The homescreen displays all posts and can be seen by any user without requiring logging in.
- By clicking any post, navigation links "Dashboard" or "Login", the user will be directed to the login page.
- The login page has a form with username and password fields where the user can login.
- The login page has a button to redirect to the sign up page to create a user.
- The sign up page has a form with username and password fields where the user can create an account.
- When the user creates an account they are automatically logged in.
- Once logged in, a session is created with cookie information stored in the database where the application can maintain session information and log in status if the user is idle or closes the browser.
- The cookie expires after 20 min.
- Once logged in the other features are enabled.
- If the user clicks on a post on the homepage, the user is taken to the post page where the post and all comments associated with it are displayed.
- In the posts page, the user can add a new comment which is added to the post.
- If the user clicks the dashboard link in the navigation then they are taken to the navigation page.
- The dashboard shows all posts created by the user.
- In the dashboard page, the user can click the new post button where they are redirected to the new post page.
- In the new post page the user can create a new post by entering a title and content.
- In the dashboard page, the user can edit a post by clicking on it, where they will be redirected to the edit page.
- In the edit page, the post is pre loaded in the title and content fields.
- In the edit page, the user can then modify the title and/or content and press the update button to update the post.
- In the edit page, the user can delete the post by clicking the delete button.
- When the user presses the logout button, then the session is deleted from the application and the user is logged out.

<br>

## Table of Contents

- [Deployed Link](#Link)
- [Install Instructions](#install-instructions)
- [Session](#session)
- [Executing Instructions](#executing-instructions)
- [Database Information](#database-information)
- [Screenshot](#Screenshot)

---

## Link

The link to the deployed website of the assignment is <br>
[https://mytechblog.azurewebsites.net/](https://mytechblog.azurewebsites.net/)

---

## Install Instructions

The dependancies are listed within the package.json file. The dependancies for this application are

- sequelize
- dotenv
- mysql2
- expressjs
- express-session
- handlebars.js

Since the dependancies are listed within the lock file, they will autmatically installed with the following command

```
npm i
```

---

## Session

The blog is implemented with a cookie and express-session. This enables the login to be persistant across sessions. It has been implemented with a timeout of 30mins. Where the user will be required to login again if there is no interaction with the blog.

---

## Executing Instructions

```
node index.js
```

Utilize the command prompts and the application will prompt you for any information it needs to fullfill the requests you have made.

---

## Database Information

The user must have a MySQL database installed on the machine they are running the application on.

The schema for the database is included in the db folder and can be included by running the command

```
mysql> source db/schema.sql
```

The seed data if required can be inserted into the database by using the index.js file in the seeds folder and inserted by running the command.

```
> node seeds/seed.js
```

The information used to connect to the database is currently implemented with the dotenv package. To include the correct information to connect to the database corretly the following the user needs to create a .env file and add the following data.

```
    DB_NAME="tech_blog_db"
    DB_PW="your_password"
    DB_USER="your_user"
```

If the user doesn't want to use the dotenv package, then they can simply replace these variable in the server.js file with the hard coded values that these variables are storing.

---

## Screenshot

This image provides a sample of the completed website.

### HomeScreen

![HomeScreen](./assets/Images/homescreen.png)

### Create

![Create](./assets/Images/create.png)

### Login

![Login](./assets/Images/login.png)

### Post

![Post](./assets/Images/post.png)

### Update

![Update](./assets/Images/update.png)

# Frontend Development

It is React web application which has the chat application interface. It has a fixed navbar on top. Left collapsable sidebar which has the list of users whose data is being fetched from user.json file. Also has a right sidebar which has the user information. At the bottom of the chat window there is footer.
In the chat area user can type the text message and can be seen on above in chat format.

## File structure

        frontend
        │
        ├── .dist
        │
        ├── node_modules
        │
        ├── public
        │   └── index.html
        │
        ├── src
        │   ├── assets
        │   │   ├── HeartBPM.png
        │   │   ├── JoshSimmons.png
        │   │   ├── respiratory_rate.png
        │   │   ├── temperature.png
        │   │   └── TestLogo.svg
        │   │
        │   ├── components
        │   │   ├── ChatArea.js
        │   │   ├── Footer.js
        │   │   ├── Navbar.js
        │   │   ├── Rightbar.js
        │   │   ├── Sidebar.js
        │   │   └── UserCard.js
        │   │
        │   ├── mockdata
        │   │   └── user.json
        │   │
        │   ├── App.js
        │   ├── index.css
        │   └── index.js
        │
        ├── .gitignore
        ├── package-lock.json
        ├──package.json
        ├──README.md
        └── tailwind.config.js

## How to run this application

To run this application you need to open terminal in frontend file then run the following command:

```
npm install
```

```
npm run start
```

Now open browser and search https://localhost:3000 to run the application

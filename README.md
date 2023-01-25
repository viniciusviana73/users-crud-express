# Users - Express.js and MongoDB CRUD 
## A simple CRUD using: 
 - JavaScript
   - Node.js
   - Express.js
 - MongoDB (Database)
   - mongoose
   - Atlas (Cloud) or Localhost (settings on config.env)
 - HBS (View Engine)
 - CSS3 (Style)
 
## Screenshots:

- [Home](https://user-images.githubusercontent.com/54729152/214446637-c7d77133-ae8e-4fe8-a416-de8d8656b42e.png)
- [Edit An Existing User](https://user-images.githubusercontent.com/54729152/214446958-eeab62a9-ba90-495e-b556-f5ad415ce13b.png)
- [Register New User](https://user-images.githubusercontent.com/54729152/214446656-cb1c57b6-e629-429f-81b0-7ddd8b4d949d.png)
 
## To run the project

### Requisites:
- Node.js
- MongoDB
- Visual Studio Code

To run this project on your machine, you can clone or download this repository so you will get the files into your computer.

After that, open the project folder on VSCode, then open the terminal. 

So, run this command to install all the dependencies:
  
    npm install
    
Express, mongoose, axios, hbs, and all dependencies is going to be downloaded after you run this cmd. You can check dependencies on package.json, at the line 26:

    "dependencies": {
    "axios": "^1.2.2",
    "body-parser": "^1.20.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "hbs": "^4.2.0",
    "just-handlebars-helpers": "^1.0.19",
    "mongoose": "^6.8.3",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20"
    }
    
So, now you got all the dependencies. All you gotta do now is to create the 'config.env' file (on root directory). This config file is going to contain PORT and MONGO_URI variables.

You can set this config.env like this:

    PORT=3000
    MONGO_URI={Link Of Your Mongo, whatever if its Atlas or Localhost URI}
    
Now, you are ready to run the project. Just go back to terminal and run the following command:

    npm start
    
Then you will see nodemon starting the server, and then 'Server is running on http://localhost:3000' (Or whatever PORT you choose on 'config.env').

Enjoy! Hope this be helpful for you xD!

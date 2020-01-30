# DevNet

## What is this?
Just another 'blog-post' MERN stack app that I developed with some of my friends. The app features all important features that are expected from a modern-day webapp, such as responsive design, user authentications, automatic login on reload, and even a post recommendation system based on Machine Learning.

## How was it made?
The base project was a project that I coded along with a Udemy course by Brad Traversy, named Full MERN Stack from Start to Finish (or very close). I understand that that is a bit of cheating but that's beside the point. I did not stop at what the course taught, and tried to upgrade the project by a significant extent.
* Several changes were made to the UI/UX which I felt improved the 'feel' of the website.
* Implemented several additional express routes to allow the use of the Recommender system.
* Implemented a Recommender system that recommends posts to user based on their past likes, and dislikes.

## Recommender System?
Yeah, really. The recommendations used the npm library [Raccoon](https://www.npmjs.com/package/raccoon), which makes it a breeze to implement the system with its api endpoints. The library uses an in-memory store (Redis) to never actually use any database for storing the recommendations to a database, which was pretty awesome.
Configuring Raccoon and Redis to work on Heroku was not exactly easy, but I made it work eventually and the app worked well.

## Can you check it out?
For a time, the website/app was hosted at the link [devnetserver.herokuapp.com](devnetserver.herokuapp.com). Is it still up? You can check.

## Work of warning.
TO store the user authorization and posts data, we used a platform called [mLab](https://mlab.com/) which basically allowed you to make CRUD requests via their api and stored the data to their service, all for free. MLab supposedly was bought by another company and they are only going to support current MongoDBs for another year or so. So if you are checking this repo later, the functionality of the app is most likely broken. You could, if you wanted, set up a MongoDB backend and configure the app to work with it if you really wanted this to work.

## Usage Instructions (for local setup)

```
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

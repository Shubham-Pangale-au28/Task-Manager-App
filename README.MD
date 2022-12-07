## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 8000

dotenv": "^16.0.1",
    "express": "^4.18.1",
    "mongoose": "^6.4.6"
{
    "version":2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node"
        }
    ]
}

{
    "version": 2,
    "builds": [
      {
        "src": "package.json", // as stated here in `vercel.json`
        "use": "vercel-sapper"
      }
    ]
  }

  "start": "nodemon src/api.js",
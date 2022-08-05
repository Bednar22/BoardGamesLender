# Local setup

</br>

## Client side -> go to /client to setup this

To run this client you need to install:

-   node
-   npm

You can find everything [here](https://nodejs.org/en/)

</br>

Then run command:

```bash
npm install
```

in project folder to install all dependencies.

</br>

### Src folder structure

```
src
│   App.js
│   index.js
|   package.json
|   ...
│
└───assets
│   │   App.css
│   │   logo.svg
|   |   ...
│   │
└───components
|   |
|   └───homepage
|   |   |   homepage.js
|   │   |   ...
|   |
|   └───navbar
|   |   |   navbar.js
|   │   |   ...
|   |
|   └───...
|   |   |   ...
|   |
└───data
|   |   ...
|   |
└───utils
|   |   ...
|   |

```

-   assets - all of the files like images, css etc
-   components - main folder with all the components with subfolders related to components functionalities
-   data - files like .json
-   utils - utility functions used in project

    </br>

## Available Scripts (more in client README)

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

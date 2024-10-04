# Word world

## Description
Word World is a web-based application that mimics popular word-guessing games, Wordle Sudoku and a Spelling Bee. For Wordle, players have six attempts to guess a randomly selected five-letter word. The application provides immediate feedback on each guess, indicating which letters are correct and in the correct position, which letters are correct but in the wrong position, and which letters are not in the word at all.
Sudoku is a logic-based number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid contain all the digits from 1 to 9.
Spelling Bee is a word game that involves listening to a word being said and then trying to guess the word. Guessing the word correctly earns the player points and adds them to their total score.

## Demo
You can view a live demo of the application at [Demo Link](https://word-world-be.onrender.com/) 

## Technologies
- **Frontend**: 
  - React
  - Axios
  - React Router
  - Tailwind CSS (for styling)
  
- **Backend**: 
  - Node.js
  - Express
  - PostgreSQL (for the dictionary database)
  - dotenv (for environment variable management)
  
- **Development Tools**:
  - npm
  - nodemon (for development)
  - cors (for handling cross-origin requests)

## Technical Information
### Project Structure


### Relevant Endpoints
- **GET /wordle/random-word**: Fetches a random five-letter word from the dictionary.
- **POST /wordle/validate-word**: Validates if a given word exists in the dictionary.
- **GET /**: Serves the React frontend application.
- **GET /users**: User-related endpoints (if applicable).

### Running the Application
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Word-Game-BE.git
   cd Word-Game-BE
   ```
   ```bash
   git clone https://github.com/yourusername/Word-Game-FE.git
   cd Word-Game-FE
   ```

2. **Set up the backend**:
   - Navigate to the `Word-Game-BE` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Word-Game-BE` directory and configure your environment variables.
   - Start the backend server:
     ```bash
     NODE_ENV=production PORT=8000 node ./bin/www
     ```

3. **Set up the frontend**:
   - Navigate to the `Word-Game-FE` directory.
   - Install dependencies:
     ```bash
     git clone https://github.com/yourusername/Word-Game-FE.git
     cd Word-Game-FE
     npm install
     ```
   - Build the React app for production:
     ```bash
     npm run build
     ```

4. **Access the application**:
   - Open your browser and go to `http://localhost:8000`.

## Issues
- **Routing Issues**: Ensure that the catch-all route in the Express server is correctly set up to serve the `index.html` file for client-side routing.
- **Environment Variables**: Make sure that the environment variables are correctly configured in both the frontend and backend.
- **Database Connection**: Ensure that the PostgreSQL database is running and accessible, and that the dictionary table is populated with valid words.

## Future Improvements
- Implement methods to track player scores and statistics.
- Add a timer for each round to increase the challenge.
- Enhance the UI/UX with animations and better styling.
- Implement a leaderboard to display top scores.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

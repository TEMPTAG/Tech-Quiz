## <a name="top"></a>

# Tech Quiz

## **Cypress Testing Integration**

![GitHub License](https://img.shields.io/github/license/TEMPTAG/Tech-Quiz?label=License)

## Description

This project adds Cypress testing to the existing Tech Quiz application, a MERN stack application that allows users to take a quiz with ten random questions and view their score upon completion. The Cypress tests include both component and end-to-end tests to ensure that the application functions reliably and meets user expectations.

[Link to Walkthrough Video](https://drive.google.com/file/d/1KLfkHWLiZwllr1T3Dom6q1ZiBRaEfuvf/view)

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

---

## Features

- **Start Quiz**: Users can start the quiz by clicking a button, which initiates the quiz and displays the first question.
- **Sequential Questions**: Users are presented with questions one by one, and can answer each question to proceed to the next.
- **Score Display**: At the end of the quiz, the user's score is displayed.
- **Restart Quiz**: Users can restart the quiz to try again, with a new random set of questions.
- **Cypress Testing Integration**: Component and end-to-end tests ensure that all quiz functionalities are reliable and work as expected.

---

## Technologies Used

- **MongoDB**: Database for storing quiz questions and user scores.
- **Express.js**: Backend framework to handle API requests.
- **React**: Front-end framework for an interactive quiz UI.
- **Node.js**: JavaScript runtime environment for running the server.
- **Cypress**: Testing framework for both component and end-to-end tests.

---

## Installation

1. **Clone the `Tech-Quiz` repository**:

```bash
  Using HTTPS:
  git clone https://github.com/TEMPTAG/Tech-Quiz.git

  Using SSH:
  git clone git@github.com:TEMPTAG/Tech-Quiz.git

  Using GitHub CLI:
  gh repo clone TEMPTAG/Tech-Quiz
```

2. **Navigate into the `Tech-Quiz` directory you just cloned down**:

   ```bash
   cd Tech-Quiz
   ```

3. **Install the npm dependencies**:

   ```bash
   npm install
   ```

4. **Create an `.env` file in the root directory and add the following**:

   ```bash
    MONGODB_URI=your_mongo_db_uri
   ```

---

## Usage

1.  **Start the application in development mode**:

    ```bash
    npm run start:dev
    ```

2.  **Visit `http://localhost:3001` in your browser to interact with the quiz.**

---

## Contributing

![GitHub contributors](https://img.shields.io/github/contributors/TEMPTAG/Tech-Quiz?color=green) ![GitHub commit activity](https://img.shields.io/github/commit-activity/t/TEMPTAG/Tech-Quiz)

OH. MY. GOODNESS. Collaborations are amazing. Share ideas, code, etc. with others is the best way to share knowledge, mutual enthusiasms, and a lot of times we make cool friends along the way. I welcome contributions in many ways, shapes, and forms:

- [Email Me](mailto:iansterlingferguson@gmail.com) and just plain tell me what you like, do not like, would like to see changed... just give me a compliment before laying it on me
- FORK IT ALL - create a fork, clone it down, mess it up, do the neato commits and comments, push it back, test it at least a million times, then submit a pull request for me to review and merge into the project if I think you are cool (and the code is cool too) - but again, the nice thing to do would be emailing me first and telling me your intentions... and don't forget the compliment part

Something, something... Have your people call my people. And by call, I mean email - who answers the phone these days?

---

## Tests

This project includes Cypress tests to validate the quiz functionality with both component and end-to-end tests.

**Running All Tests**

To run both component and end-to-end tests:

```bash
npm run test
```

**Test Coverage**

- Component Tests: Verifies that the quiz component initializes, starts the quiz on button click, displays questions and answers, and shows the final score.
- End-to-End Tests: Simulates a complete user flow from starting the quiz to answering all questions, viewing the score, and restarting.

---

## Questions

Have questions about this project? Want to collaborate? Eager to discuss conspiracy theories or debate why your favorite car is not as cool as you think? [Email Me](mailto:iansterlingferguson@gmail.com) — just do not call, because I probably will not answer.

Did this project make your life better in any way, shape, or form? Check out my other exceptionally rare moments of lucidity on my [GitHub Profile](https://github.com/TEMPTAG)

---

## License

This project is covered under the MIT License. The details of the MIT License can be found on their site [HERE](https://opensource.org/licenses/MIT). You can also see the full details of the [LICENSE](./LICENSE) for this specific project in the linked file.

<div align="center">
<em>Copyright © 2024 Ian Ferguson - powered by caffine, love, and a little bit of fun</em>

[Back to top](#top)

</div>

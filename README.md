# Interactive Quiz App

## Installation

To install the Interactive Quiz App, follow these steps:

1. Download the ZIP file containing the project from the repository's releases.

2. Extract the ZIP file to a directory of your choice on your local machine.

3. Navigate to the directory where you extracted the files.

4. Open the `index.html` file in your preferred web browser to activate the quiz.

## Customization

To use the Interactive Quiz App and customize the questions, follow these steps:

1. Open the `script.js` file in a text editor such as Visual Studio Code.

2. Locate the `quizData` array in the script and modify the questions and answers according to your preferences.
This is the template to make the question (Please make sure to change the correct answer according to you):

```javascript
const quizData = [
  {
    question: "Question",
    answers: [
      { text: "a", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false }
    ]
  },
  // Add more questions as needed
];
```
3. Save the changes to the `script.js` file.

4. Reload the `index.html` file in your web browser to see the updated quiz questions.

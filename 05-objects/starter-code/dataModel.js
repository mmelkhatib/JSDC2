/**
 * Question 1
 * Let's create a data model for storing information about a class.
 */

var myClass = {
  name: 'Spaceology 101',
  startDate: '12/10/2020',
  studentNumbers: 250,
  school: 'GA',
  instructor: {
    firstName: 'Jacob',
    lastName: 'Friedman',
    age: 25
  },
  students: [
    {
      name: 'Jill',
      age: 24,
      grades: [0.95, 0.83, 0.77]
    },
    {
      name: 'Bill',
      age: 34,
      grades: [0.95, 0.90, 0.75]
    }
  ]
};

console.log(myClass.students[0].grades[0]);
/**
 * Question 2
 * Create a data model for a quiz for our class.
 */

var quiz = {
  name: 'Quiz 1',
  questions: [
    {
    qNumber: 1,
    qText: "How many planets are there in the solar system?",
    qChoices: [
      {
        cLetter: 'A',
        cAnswer: '10'
      },
      {
        cLetter: 'B',
        cAnswer: '12'
      },
      {
        cLetter: 'C',
        cAnswer: '9'
      },
      {
        cLetter: 'D',
        cAnswer: 'None of the above'
      }
      ]
    },
    {
    qNumber: 2,
    qText: "What is an astronomical unit value based on",
    qChoices: [
      {
        cLetter: 'A',
        cAnswer: 'Distance from the Earth to the Moon'
      },
      {
        cLetter: 'B',
        cAnswer: 'Distance from the Earth to the Sun'
      },
      {
        cLetter: 'C',
        cAnswer: 'Distance from Mars to the Sun'
      },
      {
        cLetter: 'D',
        cAnswer: 'None of the above'
      }
      ]
    }
]
};

console.log(quiz.questions.length);

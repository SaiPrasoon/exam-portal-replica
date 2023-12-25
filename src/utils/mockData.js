const mockQuestions = [
  {
    id: 10001,
    question: 'Which of the following options is correct to declare int variables and use it ?',
    answerType: 'RADIO',
    optionsList: [
      'int a ; System.out.print(a);',
      'int a = 10; System.out.print(a);',
      'Int a =20; System.out.print(a);',
      'None of the above are correct',
    ],
    answer: '',
  },
  {
    id: 10002,
    question: 'How to find the length of a given String in Java?',
    answerType: 'RADIO',
    optionsList: [
      'int len = str.length;',
      'int len = str.size();',
      'int len = str.length();',
      'int len = str.size;',
    ],
    answer: '',
  },
  {
    id: 10003,
    question:
      'What is the correct condition to check whether a given character is Uppercase or not?',
    answerType: 'RADIO',
    optionsList: [
      "ch >= 'a' || ch <= 'z'",
      "ch >= 'A' || ch <= 'Z'",
      "ch >= 'A' && ch <= 'z'",
      "ch >= 'A' && ch <= 'Z'",
    ],
    answer: '',
  },
  {
    id: 10004,
    question: 'Which of the following can be operands of arithmetic operators?',
    answerType: 'RADIO',
    optionsList: ['Numeric', 'Boolean', 'Characters', 'Both Numeric and Characters'],
    answer: '',
  },
];

export { mockQuestions };

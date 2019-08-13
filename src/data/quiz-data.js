import React from "react";

const QUESTION_DATA = [
  // {
  //   question: <span>Who is India's first female commercial pilot?</span>,
  //   answers: [
  //     <span>Durga Banerjee.</span>,
  //     <span>Mary Kom.</span>,
  //     <span>Mithali Raj.</span>,
  //     <span>Amrita Sher-Gil.</span>
  //   ],
  //   correct: 0
  // },
  // {
  //   question: (
  //     <span>
  //       Who is the highest run scorer in women's international cricket?
  //     </span>
  //   ),
  //   answers: [
  //     <span>Anita Kanwar.</span>,
  //     <span>Taniya Bhatia.</span>,
  //     <span>Mithali Raj.</span>,
  //     <span>Tim Seifert.</span>
  //   ],
  //   correct: 2
  // },
  // {
  //   question: <span>First woman to join Indian Police Services?</span>,
  //   answers: [
  //     <span>Meera Borwankar.</span>,
  //     <span>Sonia Narang.</span>,
  //     <span>Kiran Bedi.</span>,
  //     <span>Lakshmi Sahgal.</span>
  //   ],
  //   correct: 2
  // },
  // {
  //   question: <span>First female of Indian Origin to go to space?</span>,
  //   answers: [
  //     <span>Sunita Williams.</span>,
  //     <span>Sunita Malhotra.</span>,
  //     <span>Ravisha Raina.</span>,
  //     <span>Kalpana Chawla.</span>
  //   ],
  //   correct: 3
  // },
  // {
  //   question: <span>First female judge of Indian Supreme Court </span>,
  //   answers: [
  //     <span>M. Fathima Beevi.</span>,
  //     <span>Sheila Dixit.</span>,
  //     <span>Uma Bharti.</span>,
  //     <span>Mamta Banerjee.</span>
  //   ],
  //   correct: 0
  // },
  {
    question: (
      <span> How do you think in India female patients are placed versus male patients in terms of treatment?</span>
    ),
    answers: [
      <span>Lower than Male patients.</span>,
      <span>Higher than Male patients.</span>,
      <span>Equal to Male patients.</span>,
      <span> None of the above.</span>
    ],
    correct: 1,
   isAll:true
  },
  {
    question: (
      <span>
        Who is the First female doctor in India and the first Indian woman to obtain a
        medical degree in the United States?
      </span>
    ),
    answers: [
      <span>Dr. Rekha Saluja.</span>,
      <span>Dr. Padmavati.</span>,
      <span>Dr. Anandi Gopal Joshi.</span>,
      <span>Dr. Indira Hinduja.</span>
    ],
    correct: 2
  },
  {
    question: (
      <span>
        What according to you makes Dimethyl Fumarate a better DMT than other available DMTs?
 
      </span>
    ),
    answers: [
      <span>Overall efficacy profile.</span>,
      <span>Ease of use with oral formulation.</span>,
      <span>Short duration of half life.</span>,
      <span>All the above.</span>
    ],
    correct: 4,
    isAll: true
  },
  {
    question: (
      <span>
        Can you guesstimate the most common symptom of Multiple Sclerosis in
        Patients?
      </span>
    ),
    answers: [
      <span>Walking Fatigue.</span>,
      <span>Fatigue.</span>,
      <span>Depression.</span>,
      <span>Bladder and Bowel symptoms.</span>
    ],
    correct: 0
  },
  {
    question: (
      <span>
        Can you estimate the ratio of female vs male patients of Multiple Sclerosis?
      </span>
    ),
    answers: [
      <span>1:1</span>,
      <span>2:1.</span>,
      <span>3:1.</span>,
      <span>None of the above.</span>
    ],
    correct: 1
  }
];

export default QUESTION_DATA;

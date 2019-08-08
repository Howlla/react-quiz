import React from "react";

const QUESTION_DATA = [
  {
    question: <span>Who is India's first female commercial pilot?</span>,
    answers: [
      <span>Durga Banerjee.</span>,
      <span>Mary Kom.</span>,
      <span>Mithali Raj.</span>,
      <span>Amrita Sher-Gil.</span>
    ],
    correct: 0
  },
  {
    question: (
      <span>
        Who is the highest run scorer in women's international cricket?
      </span>
    ),
    answers: [
      <span>Anita Kanwar.</span>,
      <span>Taniya Bhatia.</span>,
      <span>Mithali Raj.</span>,
      <span>Tim Seifert.</span>
    ],
    correct: 2
  },
  {
    question: <span>First woman to join Indian Police Services?</span>,
    answers: [
      <span>Meera Borwankar.</span>,
      <span>Sonia Narang.</span>,
      <span>Kiran Bedi.</span>,
      <span>Lakshmi Sahgal.</span>
    ],
    correct: 2
  },
  {
    question: <span>First female of Indian Origin to go to space?</span>,
    answers: [
      <span>Sunita Williams.</span>,
      <span>Sunita Malhotra.</span>,
      <span>Ravisha Raina.</span>,
      <span>Kalpana Chawla.</span>
    ],
    correct: 3
  },
  {
    question: <span>First female judge of Indian Supreme Court </span>,
    answers: [
      <span>M. Fathima Beevi.</span>,
      <span>Sheila Dixit.</span>,
      <span>Uma Bharti.</span>,
      <span>Mamta Banerjee.</span>
    ],
    correct: 0
  },
  {
    question: (
      <span>First female of Indian origin to climb mount everest?</span>
    ),
    answers: [
      <span>Mary Kom.</span>,
      <span>Bachendri Pal.</span>,
      <span>Aditi Chauhan.</span>,
      <span>Kalpana Chawla.</span>
    ],
    correct: 1
  },
  {
    question: (
      <span>
        First female doctor in India and the first Indian woman to obtain a
        medical degree in the United States
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
        What quality of Dimethyl Fumarate can make it best among DMTs for MS
        <sup>3</sup>?
      </span>
    ),
    answers: [
      <span>Efficacy.</span>,
      <span>Ease of formulation.</span>,
      <span>Tolerability Profile.</span>,
      <span>All the above.</span>
    ],
    correct: 4,
    isAll: true
  },
  {
    question: (
      <span>
        Can you guesstimate the most common symptom of Multiple Sclerosis in
        Patients<sup>2</sup>?
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
        Can you estiamte the ratio of occurence of Multiple Sclerosis in Female
        to Male patients<sup>1</sup>?
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

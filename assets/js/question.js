let questions = [
  {
    question: "Sebuah resistor memiliki hambatan 10 ohm. Jika arus yang mengalir melalui resistor tersebut adalah 2 ampere, berapakah tegangan yang diperlukan?",
    a: "5 Volt",
    b: "10 Volt",
    c: "15 Volt",
    d: "20 Volt",
    answer: "d",
  },
  {
    question: "Dua buah resistor masing-masing dengan nilai 6 ohm dan 12 ohm dihubungkan secara seri. Berapakah hambatan total dari rangkaian tersebut?",
    a: "4 Ohm",
    b: "6 Ohm",
    c: "18 Ohm",
    d: "24 Ohm",
    answer: "c",
  },
  {
    question: "Sebuah lampu memiliki hambatan sebesar 24 ohm dan dihubungkan dengan sumber tegangan 12 volt. Berapakah arus yang mengalir melalui lampu tersebut?",
    a: "0,5 ampere",
    b: "1 ampere",
    c: "2 ampere",
    d: "3 ampere",
    answer: "a",
  },
  {
    question: "Tiga resistor masing-masing dengan nilai 4 ohm, 6 ohm, dan 12 ohm dihubungkan secara paralel. Berapakah hambatan total dari rangkaian tersebut?",
    a: "1 ohm",
    b: "2 ohm",
    c: "3 ohm",
    d: "4 ohm",
    answer: "b",
  },
  {
    question: "Sebuah resistor yang memiliki hambatan 8 ohm dihubungkan dengan tegangan 16 volt. Berapakah daya yang disipasi oleh resistor tersebut?",
    a: "16 watt",
    b: "32 watt",
    c: "64 watt",
    d: "128 watt",
    answer: "b",
  },
  {
    question: "Sebuah rangkaian listrik terdiri dari baterai 9 volt dan resistor 3 ohm. Berapakah arus yang mengalir dalam rangkaian tersebut?",
    a: "1 ampere",
    b: "2 ampere",
    c: "3 ampere",
    d: "4  ampere",
    answer: "c",
  },
  {
    question: "Arus sebesar 4 ampere mengalir melalui kawat selama 10 detik. Berapakah jumlah muatan yang berpindah melalui kawat tersebut?",
    a: "20 coulomb",
    b: "30 coulomb",
    c: "40 coulomb",
    d: "50 coulomb",
    answer: "c",
  },
  {
    question: "Jika arus yang mengalir dalam sebuah resistor 5 ohm adalah 1,5 ampere, berapakah tegangan yang diberikan pada resistor tersebut?",
    a: "5 volt",
    b: "6 volt",
    c: "7,5 volt",
    d: "10 volt",
    answer: "c",
  },
  {
    question: "Sebuah rangkaian listrik terdiri dari dua resistor 10 ohm dan 5 ohm yang dihubungkan secara seri. Jika arus yang mengalir melalui rangkaian adalah 2 ampere, berapakah tegangan total yang diberikan?",
    a: "10 volt",
    b: "20 volt",
    c: "30  volt",
    d: "40 volt",
    answer: "c",
  },
  {
    question: "Baterai 12 volt dihubungkan dengan dua resistor yang dihubungkan secara paralel, masing-masing 6 ohm. Berapakah arus total yang dihasilkan dalam rangkaian tersebut?",
    a: "2 ampere",
    b: "3 ampere",
    c: "4 ampere",
    d: "5 ampere",
    answer: "b",
  },
];

let answers = [
  {
    number: "",
    answer: "",
  },
];

function submit() {
  for (let i = 0; i < questions.length; i++) {
    let input = document.querySelector(`input[name="question-${i}"]:checked`);
    if (input === null) {
      alert("Jawaban belum lengkap!");
      return;
    }
    answers[i] = {
      number: i + 1,
      answer: input.value,
    };
  }

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i].answer === questions[i].answer) {
      score++;
    }
  }

  const nilai = (score / questions.length) * 100;

  alert(`Nilai Anda: ${nilai}`);

  localStorage.setItem("nilai", nilai);

  localStorage.setItem("answers", JSON.stringify(answers));

  window.location.href = "nilai.html";
}

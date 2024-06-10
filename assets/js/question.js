let questions = [
  {
    question: "Hambatan listrik adalah ...",
    a: "Sifat alami dari bahan yang menghambat arus listrik",
    b: "Sifat alami dari bahan yang mempermudah arus listrik",
    c: "Sifat alami dari bahan yang menghambat arus listrik",
    d: "Sifat alami dari bahan yang mempermudah arus listrik",
    answer: "c",
  },
  {
    question: "Hambatan listrik diukur dalam satuan ...",
    a: "Ohm",
    b: "Volt",
    c: "Ampere",
    d: "Watt",
    answer: "a",
  },
  {
    question: "Hambatan listrik pada kawat penghantar dipengaruhi oleh ...",
    a: "Panjang kawat",
    b: "Luas penampang kawat",
    c: "Bahan kawat",
    d: "Semua jawaban benar",
    answer: "d",
  },
  {
    question: "Hambatan listrik pada kawat penghantar dipengaruhi oleh ...",
    a: "Panjang kawat",
    b: "Luas penampang kawat",
    c: "Bahan kawat",
    d: "Semua jawaban benar",
    answer: "d",
  },
  {
    question: "Hambatan listrik pada kawat penghantar dipengaruhi oleh ...",
    a: "Panjang kawat",
    b: "Luas penampang kawat",
    c: "Bahan kawat",
    d: "Semua jawaban benar",
    answer: "d",
  },
  {
    question: "Hambatan listrik pada kawat penghantar dipengaruhi oleh ...",
    a: "Panjang kawat",
    b: "Luas penampang kawat",
    c: "Bahan kawat",
    d: "Semua jawaban benar",
    answer: "d",
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

  //   set answers to local storage
  localStorage.setItem("answers", JSON.stringify(answers));

  window.location.href = "nilai.html";
}

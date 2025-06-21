"use strict";

(() => {
  // Quiz-Auswertung
  function submitQuiz() {
    const resultDiv = document.getElementById("result");
    let score = 0;
    const total = 5;

    // Gehe alle Fragen durch
    document.querySelectorAll(".quiz-options").forEach((section) => {
      const correct = section.dataset.correct; // korrekte Antwort aus Attribut
      const name = section.dataset.name;       // z. B. "q1"
      const selected = document.querySelector(`input[name="${name}"]:checked`);

      // Vorherige Klassen entfernen
      section.querySelectorAll("label").forEach((label) => {
        label.classList.remove("correct", "incorrect");
      });

      // Auswertung & Färbung
      if (selected) {
        const selectedLabel = selected.closest("label");
        if (selected.value === correct) {
          score++;
          selectedLabel.classList.add("correct");
        } else {
          selectedLabel.classList.add("incorrect");
        }
      }
    });

    // Punktzahl anzeigen
    resultDiv.textContent = `Deine Punktzahl: ${score} von ${total}`;
  }

  // Initialisierung nach Laden der Seite
  window.addEventListener("DOMContentLoaded", () => {
    // Button "Antworten überprüfen"
    document.getElementById("checkQuiz").addEventListener("click", submitQuiz);

    // Reset-Button setzt Quiz zurück
    document.getElementById("resetQuiz").addEventListener("click", () => {
      document.getElementById("quizForm").reset();
      document.getElementById("result").textContent = "";
      document.querySelectorAll("label").forEach((label) => {
        label.classList.remove("correct", "incorrect");
      });
    });

    // Farbmodus wechseln
    document.getElementById("themeToggle").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

    // Flipkarten auf Touch / Click umdrehen
    document.querySelectorAll(".flip-card").forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
        });
    });
  });
})();

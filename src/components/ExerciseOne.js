import { useState } from "react";
import "../style/exercise-1.css";

const messages = [
  "React Öğren ⚛️",
  "İş Başvursu Yap 💼",
  "Yeni Geliriniz Olsun 🤑",
];

export default function ExerciseOne() {
  const [text, setText] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (text < 3) {
      setText((t) => t + 1);
    }
  }
  function handlePrevious() {
    if (text > 1) {
      setText((t) => t - 1);
    }
  }
  function handleClose() {
    setIsOpen((e) => !e);
  }
  return (
    <>
      <button onClick={handleClose} className="close">
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={text === 1 ? "active" : ""}>1</div>
            <div className={text === 2 ? "active" : ""}>2</div>
            <div className={text === 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage text={text}>{messages[text - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span> Önceki
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Sonraki <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ text, children }) {
  return (
    <div>
      <div className="message">
        <h3>Adım: {text} </h3> {children}
      </div>
    </div>
  );
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor, color: color }}
      >
        {children}
      </button>
    </div>
  );
}

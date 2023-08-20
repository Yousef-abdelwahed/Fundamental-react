import { useState } from "react";

import "./quizStyle.css";
import Questions from "./Questions";
import questionData from "./dataQuestion";
//

const MainQuiz = () => {
  const [questions, setQuestions] = useState(questionData);
  return (
    <section className="quiz-section ">
      <h2 className="text-dark lh-base font-monospace">questions</h2>
      <article>
        <Questions questions={questions} />
      </article>
    </section>
  );
};

export default MainQuiz;

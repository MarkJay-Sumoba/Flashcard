import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./QuizzesSlice";
import "./Quiz.css";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes); // TODO: replace this with a call to your selector to get all the quizzes in state

  return (
    <section className="quizzes-container">
      <h1 className="quizzes-heading">Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link
            key={quiz.id}
            to={ROUTES.quizRoute(quiz.id)}
            className="quiz-link"
          >
            <li className="quiz-item">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}

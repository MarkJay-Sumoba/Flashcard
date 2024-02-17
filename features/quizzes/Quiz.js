import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./QuizzesSlice";

export default function Topic() {
  const quizzes = useSelector(selectQuizzes); // TODO: replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <section className="quiz-section">
      <h1 className="quiz-title">{quiz.name}</h1>
      <ul className="quiz-cards">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.NEW_QUIZ} className="quiz-button">
        Create a New Quiz
      </Link>
    </section>
  );
}

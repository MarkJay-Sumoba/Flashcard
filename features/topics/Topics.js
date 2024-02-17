import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectTopics } from "./TopicsSlice";
import "./Topics.css";

export default function Topics() {
  const topics = useSelector(selectTopics); // TODO: replace this with a call to your selector to select all the topics in state

  return (
    <section className="topics-container">
      <h1 className="topics-heading">Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic-card" key={topic.id}>
            <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
              <div className="topic-image-container">
                <img src={topic.icon} alt="" className="topic-image" />
              </div>
              <div className="topic-details">
                <h2 className="topic-name">{topic.name}</h2>
                <p className="topic-quizzes">{topic.quizIds.length} Quizzes</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}

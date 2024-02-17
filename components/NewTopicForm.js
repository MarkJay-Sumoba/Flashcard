import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/TopicsSlice";
import "./NewTopicForm.css";

export default function NewTopicForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    // dispatch your add topic action here
    const newTopic = {
      id: uuidv4(),
      name,
      icon,
    };
    dispatch(addTopic(newTopic));
    history.push(ROUTES.topicsRoute());
  };

  return (
    <section className="new-topic-form-container">
      <form onSubmit={handleSubmit} className="new-topic-form">
        <h1 className="new-topic-form-heading">Create a New Topic</h1>
        <div className="form-group">
          <label htmlFor="topic-name">Topic Name</label>
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter Topic Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic-icon">Select an Icon</label>
          <select
            id="topic-icon"
            onChange={(e) => setIcon(e.currentTarget.value)}
            value={icon}
            className="form-select"
            required
          >
            <option value="" disabled>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-button">
          Add Topic
        </button>
      </form>
    </section>
  );
}

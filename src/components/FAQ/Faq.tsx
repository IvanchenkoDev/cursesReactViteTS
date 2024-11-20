import React, { useState } from "react";
import "./Faq.scss";

const Faq: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setMessages((prev) => [...prev, question]);
      setQuestion("");
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-content">
 
        <div className="faq-messages">
          {messages.map((msg, index) => (
            <div
              className={`faq-item ${expandedIndexes.includes(index) ? "open" : ""}`}
              key={index}
            >
              <div className="faq-item-header" onClick={() => toggleExpand(index)}>
                {msg.slice(0, 20)}...
                <span className="faq-plus-btn">
                  {expandedIndexes.includes(index) ? "−" : "+"}
                </span>
              </div>
              {expandedIndexes.includes(index) && (
                <div className="faq-item-body">{msg}</div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-form-container">
          <h3 className="faq-form-title">Ask your question</h3>
          <form onSubmit={handleSubmit} className="faq-form">
            <input
              type="text"
              placeholder="Name"
              required
              className="faq-form-input"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="faq-form-input"
            />
            <textarea
              placeholder="Enter your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              className="faq-form-input faq-form-input--text"
            />
            <button type="submit" className="faq-form-submit">
              Send your message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
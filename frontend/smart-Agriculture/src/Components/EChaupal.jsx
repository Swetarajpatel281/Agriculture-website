import React from 'react';
import './Styles/EChaupal.css'; // Import the CSS file for styling

const EChaupal = () => {
  return (
    <div className="e-chaupal-container">
      <header className="e-chaupal-header">
        <h1>E-Chaupal: Farmer's Knowledge Forum</h1>
        <p>Connect, Learn, and Share with Fellow Farmers</p>
      </header>

      <main className="e-chaupal-content">
        {/* Section for Posting Questions */}
        <section className="post-question">
          <h2>Ask a Question</h2>
          <textarea
            placeholder="Type your question here..."
            rows="4"
            className="question-input"
          ></textarea>
          <button className="submit-btn">Submit</button>
        </section>

        {/* Section for Discussion Threads */}
        <section className="discussion-threads">
          <h2>Discussion Threads</h2>
          {/* Example of a discussion thread */}
          <div className="thread">
            <h3>Thread Title 1</h3>
            <p>Discussion summary or initial question here...</p>
            <button className="view-thread-btn">View Thread</button>
          </div>

          {/* Add more threads as needed */}
          <div className="thread">
            <h3>Thread Title 2</h3>
            <p>Discussion summary or initial question here...</p>
            <button className="view-thread-btn">View Thread</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EChaupal;

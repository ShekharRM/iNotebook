import React from "react";

function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About iNotebook</h2>
      <div className="card shadow-lg p-4">
        <p>
          <strong>iNotebook</strong> is a simple and secure note-taking web application that helps you manage your notes efficiently. Whether you want to jot down quick ideas or organize your daily tasks, iNotebook provides an intuitive and easy-to-use interface.
        </p>
        <h4 className="mt-3">Key Features:</h4>
        <ul>
          <li><strong>Add Notes:</strong> Quickly create and save notes with ease.</li>
          <li><strong>Update Notes:</strong> Modify existing notes to keep your information up to date.</li>
          <li><strong>Delete Notes:</strong> Remove notes that are no longer needed.</li>
          <li><strong>Secure & Accessible:</strong> Your notes are stored securely and accessible anytime.</li>
        </ul>
        <p className="mt-3">
          iNotebook is designed to help you stay organized and productive with a clean and simple interface.
        </p>
      </div>
    </div>
  );
}

export default About;


const element = (
  <div class="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="card-title">Kiran V</h1>
      <p className="card-description">
        Vishnu institute of computer Education and Technology Lb nagar
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

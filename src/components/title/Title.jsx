import "./Title.css";

const Title = ({ title, text }) => {
  return (
    <div className="title-container inner-container">
      <h2>{title}</h2>
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default Title;

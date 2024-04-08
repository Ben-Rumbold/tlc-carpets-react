import "./Subtitle.css";

const Subtitle = ({ title }) => {
  return (
    <div className="subtitle-container">
      <h3>{title}</h3>
      <hr />
    </div>
  );
};

export default Subtitle;

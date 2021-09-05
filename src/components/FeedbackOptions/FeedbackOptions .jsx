export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((item) => {
        return (
          <button key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </>
  );
};

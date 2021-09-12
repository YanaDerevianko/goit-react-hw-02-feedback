import propTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
     {options.map((item) => {
        return (
          <button key={item} name={item} onClick={()=> {onLeaveFeedback(item)}}>
            {item}
          </button>
        );
      })}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.object.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

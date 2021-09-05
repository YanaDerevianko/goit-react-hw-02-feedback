import propTypes from "prop-types";
export const Section = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
};

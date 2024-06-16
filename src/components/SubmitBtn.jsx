import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  let navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>sending...
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitBtn;

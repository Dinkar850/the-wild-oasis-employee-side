import { Toaster } from "react-hot-toast";

function StyledToaster() {
  const toastStyle = {
    fontSize: "1.6rem",
    maxWidth: "50rem",
    padding: "1.6rem 2.4rem",
    backgroundColor: "var(--color-grey-0)",
    color: "var(--color-grey-800)",
    display: "flex",
    gap: "0.5rem",
  };
  return (
    <Toaster
      position="top-center"
      gutter={50}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: toastStyle,
      }}
    />
  );
}

export default StyledToaster;

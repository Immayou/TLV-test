const MainWrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
};

export default MainWrapper;

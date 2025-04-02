const Footer = () => {
  return (
    <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   border: "2px solid black",
      //   borderRadius: "5px",
      // }}
      style={{
        display: "flex",
        justifyContent: "center",
        border: "2px solid black",
        borderRadius: "5px",
        textAlign: "center",
        padding: "10px",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <p>
        A real-time, decentralized collaboration platform powered by Solana and
        AI to enhance productivity.
      </p>
    </div>
  );
};

export default Footer;

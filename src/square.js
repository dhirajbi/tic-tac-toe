export default function Square({ value, onClick, isHighlight }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "80px",
        height: "80px",
        fontSize: "2rem",
        margin: "5px",
        cursor: "pointer",
        border: "2px solid #000",
        borderRadius: "8px",
        backgroundColor: isHighlight ? "#90EE90" : "white",
        transition: "0.3s",
      }}
    >
      {value}
    </button>
  );
}

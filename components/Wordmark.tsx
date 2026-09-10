type Props = {
  /** on-dark variant: outlined gold square, white "YALA", gold subtitle */
  onDark?: boolean;
};

export function Wordmark({ onDark = false }: Props) {
  return (
    <>
      <div
        style={{
          width: 36,
          height: 36,
          background: onDark ? "transparent" : "#0B1F3A",
          border: onDark ? "1.5px solid #BFA163" : "none",
          display: "grid",
          placeItems: "center",
          fontFamily: "var(--font-playfair)",
          fontSize: 19,
          color: "#BFA163",
        }}
      >
        Y
      </div>
      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 21,
            letterSpacing: ".05em",
            color: onDark ? "#fff" : "#0B1F3A",
          }}
        >
          YALA
        </div>
        <div
          style={{
            fontSize: "9.5px",
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: onDark ? "#BFA163" : "#7A6230",
            marginTop: 5,
          }}
        >
          Property Management
        </div>
      </div>
    </>
  );
}

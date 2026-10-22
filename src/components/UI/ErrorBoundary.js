import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error("Portfolio crashed:", error);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    const link = { color: "#22D3EE" };
    return (
      <div
        role="alert"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: 24,
          textAlign: "center",
          background: "#0F172A",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: 24 }}>Something went wrong</h1>
        <p style={{ color: "#94A3B8", maxWidth: 420 }}>
          The page hit an unexpected error. Reloading usually fixes it, or reach me directly:
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "1px solid #22D3EE",
            background: "transparent",
            color: "#22D3EE",
            cursor: "pointer",
          }}
        >
          Reload page
        </button>
        <p style={{ color: "#94A3B8", fontSize: 14 }}>
          <a href="mailto:randorij27@gmail.com" style={link}>randorij27@gmail.com</a>
          {" · "}
          <a href="https://wa.me/963992684568" style={link}>WhatsApp</a>
        </p>
      </div>
    );
  }
}

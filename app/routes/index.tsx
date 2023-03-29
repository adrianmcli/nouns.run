import styles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="/nrc-logo.png"
        alt=""
        style={{
          width: "256px",
        }}
      />
    </div>
  );
}

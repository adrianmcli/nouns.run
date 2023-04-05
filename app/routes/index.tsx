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
        flexDirection: "column",
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
      <div style={{ paddingTop: "1rem" }}>
        <a className="cool-link" href="https://www.strava.com/clubs/nouns">
          &nbsp;JOIN THE CREW&nbsp;
        </a>
      </div>
      <div style={{ paddingTop: "1rem", textAlign: "center" }}>
        Our first run will be in Tokyo on 4/14.
        <br />
        Event details in the link above.
        <br />
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          Let's get running!
        </span>
      </div>
    </div>
  );
}

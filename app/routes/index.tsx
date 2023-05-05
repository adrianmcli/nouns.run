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
        {/* <span style={{ color: "red" }}>
          <b>Next event:</b> Tokyo on 4/14 at 12:00.
        </span>
        <br />
        Details in the link above.
        <br /> */}
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          Let's get running!
        </span>
        <br />
        <div style={{ paddingTop: "1rem" }}>
          Come join us on <a href="https://t.me/+Gi3bOa9dpTNjNjY5">Telegram</a>{" "}
          and follow us on <a href="https://twitter.com/nounsrc">Twitter</a>!
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

function App() {
  const [socialMediaStats, setSocialMediaStats] = useState([
    {
      name: "Facebook",
      icon: "/assets/icon-facebook.svg",
      profileName: "@nathanf",
      followersTotal: 1987,
      followersGainedToday: 12,
      overviewStats: [
        {
          name: "Page Views",
          amount: 87,
          diff: 3,
        },
        {
          name: "Likes",
          amount: 52,
          diff: -2,
        },
      ],
    },
    {
      name: "Instagram",
      icon: "/assets/icon-instagram.svg",
      profileName: "@realnathanf",
      followersTotal: 11000,
      followersGainedToday: 1099,
      overviewStats: [
        {
          name: "Likes",
          amount: 5462,
          diff: 2257,
        },
        {
          name: "Profile Views",
          amount: 52000,
          diff: 1375,
        },
      ],
    },
    {
      name: "Twitter",
      icon: "/assets/icon-twitter.svg",
      profileName: "@nathanf",
      followersTotal: 1044,
      followersGainedToday: 99,
      overviewStats: [
        {
          name: "Retweets",
          amount: 117,
          diff: 303,
        },
        {
          name: "Likes",
          amount: 507,
          diff: 553,
        },
      ],
    },
    {
      name: "Youtube",
      icon: "/assets/icon-youtube.svg",
      profileName: "Nathan F.",
      followersTotal: 8239,
      followersGainedToday: -144,
      overviewStats: [
        {
          name: "Likes",
          amount: 107,
          diff: -19,
        },
        {
          name: "Total Views",
          amount: 1407,
          diff: -12,
        },
      ],
    },
  ]);

  return (
    <>
      <main className="dashboard light-mode">
        <div className="dashboard__top">
          <div className="dashboard__top__heading-and-stuff">
            <h1>Social Media Dashboard</h1>
            <div>Total Followers: 23,004</div>
          </div>
          <div className="dashboard__top__dark-mode-container">
            <div className="dashboard__top__dark-mode-container__text">
              Dark Mode
            </div>
            <div
              className="dashboard__top__dark-mode-container__button-container"
              onClick={() => {
                const body = document.body;
                const dashboard = document.querySelector(".dashboard");
                if (body.classList.contains("light-mode")) {
                  body.classList.replace("light-mode", "dark-mode");
                  dashboard.classList.replace("light-mode", "dark-mode");
                } else {
                  body.classList.replace("dark-mode", "light-mode");
                  dashboard.classList.replace("dark-mode", "light-mode");
                }
              }}
            >
              <div className="dashboard__top__dark-mode-container__button-container__button"></div>
            </div>
          </div>
        </div>
        <div className="dashboard__follower-stats">
          {socialMediaStats.map((socialMedia, index) => (
            <div
              className={`dashboard__follower-stats__card-wrapper card-wrapper-${
                index + 1
              }`}
              key={socialMedia.name}
            >
              <div className={`dashboard__follower-stats__card`}>
                <div className="dashboard__follower-stats__card__top-info">
                  <img src={`${socialMedia.icon}`} alt="social media icon" />
                  <div>{socialMedia.profileName}</div>
                </div>
                <div className="dashboard__follower-stats__card__total-followers">
                  {socialMedia.followersTotal > 10000
                    ? (socialMedia.followersTotal / 1000).toString() + `K`
                    : socialMedia.followersTotal}
                  <span>
                    {socialMedia.name === `Youtube`
                      ? `subscribers`
                      : `followers`}
                  </span>
                </div>
                <div
                  className={`dashboard__follower-stats__card__followers-gained ${
                    socialMedia.followersGainedToday > 0
                      ? `positive`
                      : `negative`
                  }`}
                >
                  <img
                    src={
                      socialMedia.followersGainedToday > 0
                        ? `/assets/icon-up.svg`
                        : `/assets/icon-down.svg`
                    }
                    alt="arrow-icon"
                  />
                  <div>{Math.abs(socialMedia.followersGainedToday)} Today</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dashboard__additional-stats">
          <h2>Overview - Today</h2>
          <div className="dashboard__additional-stats__container">
            {socialMediaStats.map((socialMedia) =>
              socialMedia.overviewStats.map((overviewStat) => (
                <div
                  className="dashboard__additional-stats__container__card"
                  key={socialMedia.name + overviewStat.name}
                >
                  <div className="dashboard__additional-stats__container__card__top-info">
                    <div>{overviewStat.name}</div>
                    <img src={`${socialMedia.icon}`} alt="social media icon" />
                  </div>
                  <div className="dashboard__additional-stats__container__card__stat">
                    <div className="dashboard__additional-stats__container__card__stat__total-amount">
                      {overviewStat.amount > 10000
                        ? (overviewStat.amount / 1000).toString() + `K`
                        : overviewStat.amount}
                    </div>

                    <div
                      className={`dashboard__additional-stats__container__card__stat__diff ${
                        overviewStat.diff > 0 ? `positive` : `negative`
                      }`}
                    >
                      <img
                        src={
                          overviewStat.diff > 0
                            ? `/assets/icon-up.svg`
                            : `/assets/icon-down.svg`
                        }
                        alt="arrow-icon"
                      />
                      <div>{Math.abs(overviewStat.diff)}%</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

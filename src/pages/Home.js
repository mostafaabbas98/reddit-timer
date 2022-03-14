import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledBtn } from '../styles/Home.style';

const Home = () => {
  return (
    <main>
      <StyledDiv>
        <h1>Best Time To Post on Reddit According To Different Subreddits</h1>
        <p>
          In the world of multiple social media platforms with similar features,
          Reddit is the most unique of all. It is a super active platform that
          allows people to put their opinions out in front of the entire
          community. It is ideally considered as the front page on the internet
          and it is a great way to share content with like-minded people – which
          is why it’s worth knowing the best time to post on Reddit, so that you
          get a lot of upvotes and attention.
        </p>
        <p>
          When you know the correct time to upload your posts, you can make
          sense of the content overload. People will stop to see your posts when
          they are scrolling through their feed. Whether you want to use the
          data to find out the peak times, or you want to take advantage of
          quieter hours – you can coordinate these insights with your social
          media scheduler, and prepare the best plans to schedule Reddit posts.
        </p>
        <p>
          reed this
          <a
            className="active"
            target="_blank"
            rel="noreferrer"
            href="https://recurpost.com/blog/best-time-to-post-on-reddit"
          >
            article
          </a>
          to know more
        </p>
      </StyledDiv>
      <StyledDiv>
        <h2>How it works?</h2>
        <p>
          We find the 500 top posts from the past year for a subreddit. The data
          is visualized in a heatmap grouped by weekday and hour of the day.
        </p>

        <Link to="/search">
          <StyledBtn>Search</StyledBtn>
        </Link>
      </StyledDiv>
    </main>
  );
};

export default Home;

import React, { useState } from 'react';
import Clender from '../components/Clender';
import SyncLoader from 'react-spinners/SyncLoader';
import { css } from '@emotion/react';
import { StyledForm, StyledSearch } from '../styles/Search.style';

const override = css`
  display: block;
  margin: 5rem auto;
`;

const Search = () => {
  const [subreddit, setSubreddit] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const responses = [];

  const matrix = Array(7)
    .fill(0)
    .map(() => Array(24).fill(0));
  // console.log(matrix);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (subreddit.trim()) {
      fetchPosts(subreddit);
    }
  };

  const fetchPosts = async (subreddit, afterParam) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}/top.json?t=all&limit=100${
          afterParam ? '&after=' + afterParam : ''
        }`
      );
      if (!response.ok) {
        throw new Error('something wrong');
      }
      const responseJSON = await response.json();
      responses.push(responseJSON);
      if ((responseJSON.data.after, responses.length < 5)) {
        fetchPosts(subreddit, responseJSON.data.after);

        return;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Please enter valid subreddit');
      console.log(error.message);
    }
    // Array 0f 5 objects, single obj hold single fetch response
    // console.log(responses);
    parseResult(responses);
  };

  const parseResult = (responses) => {
    const allPosts = [];
    responses.forEach((response) => {
      allPosts.push(...response.data.children);
    });
    // Array of 500 object
    // console.log(allPosts);

    allPosts.forEach(({ data: { created, score } }) => {
      const postDate = new Date(created * 1000);
      const postDay = postDate.getDay();
      const postHours = postDate.getHours();

      for (let x = 0; x < matrix.length; x++) {
        if (postDay === x) {
          for (let y = 0; y < matrix[x].length; y++) {
            if (postHours === y) {
              matrix[x][y] += 1;
            }
          }
        }
      }
    });
    setData(matrix);
  };

  return (
    <StyledSearch>
      <StyledForm onSubmit={formSubmitHandler}>
        <label htmlFor="userInput">Subreddit</label>
        <input
          type="text"
          id="userInput"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
        <button>Search</button>
      </StyledForm>
      {loading && (
        <SyncLoader loading={loading} color="#d84315" css={override} />
      )}
      {error ? <p>{error}</p> : <Clender data={data} subreddit={subreddit} />}
    </StyledSearch>
  );
};

export default Search;

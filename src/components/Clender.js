import React from 'react';
import { HeatMapGrid } from 'react-grid-heatmap';
import { StyledClender, StyledTabel } from '../styles/Clender.style';

const xLabels = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];
const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Clender = ({ data, subreddit }) => {
  return (
    <StyledClender>
      {data.length === 0 && (
        <h2 style={{ textAlign: 'center' }}>
          Search for subreddit to show results
        </h2>
      )}
      {data.length > 0 && (
        <StyledTabel>
          <h2>
            Best Time to post about <span>{subreddit}</span>
          </h2>
          <HeatMapGrid
            data={data}
            xLabels={xLabels}
            yLabels={yLabels}
            // Reder cell with tooltip
            cellRender={(x, y, value) => (
              <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
            )}
            xLabelsStyle={() => ({
              fontSize: '0.7rem',
            })}
            yLabelsStyle={() => ({
              fontSize: '.7rem',
              textTransform: 'uppercase',
            })}
            cellStyle={(_x, _y, ratio) => ({
              background: `rgb(216, 67, 21, ${ratio})`,
              fontSize: '.7rem',
              fontWeight: '900',
              color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
            })}
            cellHeight="2rem"
            // onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
            // xLabelsPos="up"
            // yLabelsPos="right"
            // square
          />
        </StyledTabel>
      )}
    </StyledClender>
  );
};

export default Clender;

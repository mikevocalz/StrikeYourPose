import React, {Fragment} from "react";

//UI
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider } from '@material-ui/core/styles'

const episodeInfo = ({ match, data }) => {
  const episode = data.find(episode => episode.id === Number(match.params.id));
  let episodeData = this.props.data;

  if (episode)
    episodeData = (
      <MuiThemeProvider>
        <Paper elevation={4}>
          <hr />
          <h1>{`${episode.name}`}</h1>
          <img
            style={{ height: "400px" }}
            alt="my avatar"
            src={episode.thumb}
          />
          <h4>Air Dare: {episode.air_date}</h4>
          <hr />
          <h4>Runtime: {episode.runtime}</h4>
          <h4>rating: {episode.rating}</h4>
          <hr />
        </Paper>
      </MuiThemeProvider>
    );
  else episodeData = <h2>episode not found...</h2>;

  return (
    <Fragment>
      <div
        style={{
          padding: "10px",
          width: "70%",
          margin: "auto"
        }}
      >
        {episodeData}
      </div>
      </Fragment>
    
  );
};

export default episodeInfo;
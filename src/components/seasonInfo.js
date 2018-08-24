import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import classNames from 'classnames';
import { compose } from "recompose";

//UI
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Dots/Dots.css";

const theme = createMuiTheme();
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 1.5,
    minWidth: '100%',
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:30,
    paddingBottom: 40
  },
  header: {
    marginLeft: 0
  },
  paperRoot: {
  marginTop: 75,
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});



const episodeInfo = ({ match, history, pose, classes }) => {
  const episode = pose.episodes.find(episode => episode.id === match.params.id );
  let episodeData

  if (episode)
    episodeData = <MuiThemeProvider theme={theme}>
        <Paper elevation={1} className={classes.root}>
          <Typography variant="display2" style={{ fontWeight: "bold", textTransform: "uppercase", color: "#CD853F", textShadowColor: "black", textShadow: "3px 3px #000" }}>
            {episode.name}
          </Typography>
          <img style={{ width: "100%", height: "100%", marginTop: 5, borderRadius: 10 }} alt="my avatar" src={episode.thumb} />
          <hr />
          <Grid item xs={12} sm={10} md={10} xl={8}>
            <h3 style={{ color: "#404040" }}>
              Air Date: {episode.air_date}
            </h3>
            <h3 style={{ color: "#404040" }}>Runtime: {episode.runtime}</h3>
            <h3 style={{ color: "#404040" }}>Rating: {episode.rating}</h3>
          </Grid>
          <hr />
          <h3>{episode.description}</h3>
        <div className="resp-container"
          style={{ width: "100%", padding: 10, backgroundColor: "#000", borderRadius: 10, margin: "0 auto", overflow: "hidden" }}
          >
          <iframe className="iframe-div" title="promo" id="video" allow="encrypted-media"
           src={episode.promo_link} frameBorder="0" allowFullScreen />
          </div>
          <Typography variant="title" style={{ marginTop: 15, marginBottom: -5, fontWeight: "bold", textTransform: "uppercase", color: "#CD853F", textShadowColor: "black", textShadow: "1px 1px #000" }}>
            Purchase:
          </Typography>
          <Button variant="outlined" color="primary" className={classes.button} target="_blank" href="https://www.amazon.com/dp/B07DMYNK2Y?ref_=imdbref_mwbr_aiv&tag=imdbtag_mwbr_aiv-20" style={{ maxHeight: 60, borderWidth: 2, borderColor: "black", backgroundColor: "white", marginTop: 20, borderRadius: 10, paddingRight: 10 }}>
            <img className={classNames(classes.leftIcon)} alt="prim-logo" src="https://bit.ly/2wailkK" style={{ width: 50, height: 50 }} />
            <h3
              style={{
                color: "black",
                textShadowColor: "black",
                textShadow: "0.5px 2px #CD853F"
              }}
            >
              Watch Now on Prime Video
            </h3>
          </Button>
          <h4 style={{ marginTop: 5, marginLeft: 10 }}>
            From $1.99 (SD) on Prime Video, $19.99 for the Full Season
          </h4>

          <Button variant="outlined" color="primary" className={classes.button} target="_blank" href="https://apple.co/2PwyCsp" style={{ maxHeight: 60, borderWidth: 2, borderColor: "black", backgroundColor: "#b30000", marginTop: 20, borderRadius: 10, paddingRight: 10 }}>
            <img className={classNames(classes.leftIcon)} alt="pose-logo" src="https://bit.ly/2MtE2q5" style={{ width: 50, height: 50 }} />
            <h3
              style={{
                color: "white",
                textShadowColor: "black",
                textShadow: "0.5px 2px #000"
              }}
            >
              Watch Now on iTunes
            </h3>
          </Button>
          <h4 style={{ marginTop: 5, marginLeft: 10 }}>
            From $2.99 (SD) on iTunes, $19.99 for the Full Season
          </h4>

          <Button variant="outlined" color="primary" className={classes.button} target="_blank" href="https://bit.ly/2wljcP4" style={{ maxHeight: 60, borderWidth: 2, borderColor: "black", backgroundColor: "black", marginTop: 20, borderRadius: 10, paddingRight: 10 }}>
            <img className={classNames(classes.leftIcon)} alt="pose-logo" src="https://bit.ly/2wkN6Tr" style={{ width: 50, height: 50 }} />
            <h3
              style={{
                color: "white",
                textShadowColor: "black",
              textShadow: "0.5px 2px #9A0A35"
              }}
            >
              Watch Now on Google Play Store
            </h3>
          </Button>
          <h4 style={{ marginTop: 5, marginLeft: 10 }}>
            From $1.99 (SD) on Google Play, $13.99 for the Full Season
          </h4>
        </Paper>
      </MuiThemeProvider>;
  else episodeData = (
    <div style={{display: 'flex', padding: '10%', alignSelf: 'center', justifyContent: 'center'}}>
      <Spinner size={80} color="white" />
    </div>
    )

  return <Fragment>
      <Grid item className={classes.header} style={{ position: "absolute", flex: 1, marginBottom: 0, marginTop: -10, marginLeft: -130, backgroundColor: "white", width: 350, height: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10, flexShrink: 1 }}>
        <Button onClick={()=> history.goBack()}>
          <Typography variant="display1" style={{ fontWeight: "bold", textTransform: "uppercase", color: "black", marginLeft: 100, flexShrink: 1 }}>
            ⬅ BACK
          </Typography>
        </Button>
      </Grid>
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12} sm={10} md={8} xl={6}>

        {episodeData}
    
      </Grid>
    </Grid>

    </Fragment>;
};


episodeInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withRouter, withStyles(styles))(episodeInfo);

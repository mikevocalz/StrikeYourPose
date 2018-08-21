import React, {  Fragment } from 'react'

import { compose } from 'recompose'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Slider from 'react-slick';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';

import SeasonInfo from './seasonInfo';



const styles = theme => ({
  root: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  card: {
    maxWidth: '400px',
    maxHeight:'700px',
    minWidth: '190px',   
    minHeight: '400px',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
 
  },
  header: {
    marginLeft: 0
  },
  demo: {
    flex: 1,
    justifyContent: 'center',
  alignItems: 'center'
  }
})


const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2900,
    centerPadding: 40,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          padding: '10%'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        }
      }
    ]
  };

const generateSlides = ({pose}) => {
    if(pose.slides){
        return(
            <Slider {...settings} style={{ padding: '3%', height: 'auto', width: "100%"}}>
            {pose.slides.map((item) => {
              return <div key={item.key} className="item-slider"
              >
                  <div className="caption">
                    <h3>"{item.text}"</h3>
                    <p>-{item.person}</p>
                  </div>
<img alt="header_image" src={item.image} 
                    style={{
                      zIndex: 15,
                      maxWidth: '100%',
                      maxHeight: '100%',
                      minWidth: '100%',
                      minHeight: '100%',
                      marginBottom: 15
                    }}/>
                </div>;
              })
              }
          </Slider>
        )
    }
}


const generateEpisodes = ({ pose, episodes, episode, classes, match: { url },location: { pathname } }) => {


  if (pose.episodes) {


  

    return (
      <Fragment>
        <Grid  container className={classes.root} spacing={16}>
        <Grid item xs={12} sm={10} md={12} xl={10}>
   
          <Grid item  alignItems='center' wrap="wrap" container className={classes.demo} style={{ marginTop: 20 }} direction='row' justify="center" spacing={16}>
              {pose.episodes.map(item => {
                return <div key={item.name} className="item-slider">
                    <Card className={classes.card}>
                      <CardMedia className={classes.media} image={item.thumb} title="Contemplative Reptile" />
                      <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                          {item.name}
                        </Typography>
                        <Typography component="p" style={{flex: 1, flexWrap: 'wrap', width: '100%' }}>
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions style={{ position: 'absolute', bottom: 20 }}>
                     
                          <Button key={item.id} 
                          to={`/episode/${item.id}`}
                          component={Link}
                          selected={'/episode' === pathname}
                          size="small" color="primary" style={{ fontWeight: 'bold' }}>
                            Read More
                          </Button>
                    
                      </CardActions>
                    </Card>
                  </div>;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
};






const Home = (props,  classes, episodes, episode, match ) => {
  this.state = { isLoading: true }

  if (!this.state.isLoading) {
    return(
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Dots
        />
      </div>
    )
  } else {
    return (
      <Fragment>
        <div style={{ padding: '2%'}}>
        {generateSlides(props)}
        </div>

        <Grid item className={classes.header} style={{ position: 'absolute', flex: 1,  marginBottom: 50, marginTop: 50, marginLeft: -130, backgroundColor: "white", width: 350, height: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10, flexShrink: 1  }}>
            <Typography variant="display2" style={{   fontWeight: 'bold', textTransform: 'uppercase', color: 'black', marginLeft: 100, flexShrink: 1 }} >
                  Episodes
            </Typography>
        </Grid>

        <List style={{ marginTop: 90, backgroundColor: 'transparent', height: 'auto', width: '100%'}}>
          
          {generateEpisodes(props)}
        </List>
       
         {/* <Route path={`${this.props.match.url}/:id`} render={props => <SeasonInfo data={this.props.pose.episodes} {...props} />} /> */}
      
      </Fragment>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose( withRouter, withStyles(styles))(Home)

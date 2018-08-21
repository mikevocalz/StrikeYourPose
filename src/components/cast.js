import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import SwipeableViews from 'react-swipeable-views';

import {Typography, Grid, Card, CardContent, CardMedia, AppBar,  CssBaseline, Tab, Tabs, List } from '@material-ui/core'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  tabRoot: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    left:-70
  },
  tabsCont: {
    flex: 1,
    width: '100%',
    marginTop: -50,
  },
  root: {
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: 155
  },
  textCont:{
    fontWeight: 'bold',
    flexShrink: 1,
    minimumFontScale: 0.01
  },
  card: {
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 5
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

class Cast extends Component {
  state = {
    direction: 'row',
    justify: 'center',
    value: 0
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render(){
    const { classes, theme } = this.props;
    const { alignItems, direction, justify } = this.state;
    return (
      <Fragment>
        <CssBaseline/>
<div className={classes.tabsCont}>
<Grid item className={classes.header} style={{ position: 'absolute', flex: 1, marginBottom: 70, marginTop: 85,zIndex: 10, marginLeft: -50, backgroundColor: "white", width: 300, height: 50, borderBottomRightRadius: 10, borderTopRightRadius: 10, flexShrink: 1  }}>
        <Typography variant="display2" style={{  marginTop: 0,fontWeight: 'bold', textTransform: 'uppercase', 
        color: 'black', marginLeft: 60, flexShrink: 1 }} >
                  Episodes
        </Typography>
        </Grid> 
        
        <AppBar position="static" color="default" style={{ position: 'absolute', left: 0, right: 0, backgroundColor: 'white', marginBottom: 40 }} >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Cast" fullWidth />
            <Tab label="Extended Cast" fullWidth />
            <Tab label="Team" fullWidth />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
         
        >
          <TabContainer dir={theme.direction}>
          
        
      <Grid container className={classes.root}>
            <Grid 
             container
             spacing={16}
             className={classes.demo}
             alignItems={alignItems}
             direction={direction}
             justify={justify}
           >
  <div>
  <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline" style={{fontWeight: 'bold'}}>Live From Space</Typography>
            <Typography variant="subheading" color="textSecondary" style={{fontWeight: 'bold'}}>
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://m.media-amazon.com/images/M/MV5BMTY3MjkyODk5MF5BMl5BanBnXkFtZTgwMTIxMjY4NTM@._V1_SY1000_CR0,0,1571,1000_AL_.jpg"
          title="Live from space album cover"
        />
      </Card>
    </div>
        </Grid>
     </Grid>

       </TabContainer>
          <TabContainer dir={theme.direction}>
          <Grid container className={classes.root}>
            <Grid 
             container
             spacing={16}
             className={classes.demo}
             alignItems={alignItems}
             direction={direction}
             justify={justify}
           >
  <div>
<List>

      <div>
  <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline" style={{fontWeight: 'bold'}}>Live From Space</Typography>
            <Typography variant="subheading" color="textSecondary" style={{fontWeight: 'bold'}}>
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://m.media-amazon.com/images/M/MV5BMTY3MjkyODk5MF5BMl5BanBnXkFtZTgwMTIxMjY4NTM@._V1_SY1000_CR0,0,1571,1000_AL_.jpg"
          title="Live from space album cover"
        />
      </Card>
    </div>
               
        </List>

    </div>
        </Grid>
     </Grid>

          
          </TabContainer>
          <TabContainer dir={theme.direction}>
          
          <Grid container className={classes.root}>
            <Grid 
             container
             spacing={16}
             className={classes.demo}
             alignItems={alignItems}
             direction={direction}
             justify={justify}
           >
 <div>
  <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline" style={{fontWeight: 'bold'}}>Live From Space</Typography>
            <Typography variant="subheading" color="textSecondary" style={{fontWeight: 'bold'}}>
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://m.media-amazon.com/images/M/MV5BMTY3MjkyODk5MF5BMl5BanBnXkFtZTgwMTIxMjY4NTM@._V1_SY1000_CR0,0,1571,1000_AL_.jpg"
          title="Live from space album cover"
        />
      </Card>
    </div>
        </Grid>
     </Grid>


          </TabContainer>
        </SwipeableViews>
        </div>
    </Fragment>  
    );
  }
}

Cast.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, 
  { withTheme: true })(Cast);

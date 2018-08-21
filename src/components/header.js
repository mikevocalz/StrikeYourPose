import React, { Component, Fragment } from 'react'
import classNames from 'classnames';

import { compose } from 'recompose'

import { Link, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,  CssBaseline,
 Drawer, Divider,MenuList, MenuItem } from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;
const logo = "https://4d949b98-1de1-48a0-bf11-441904ffdc1f-bluemix.cloudant.com/pose/poseData71118/StrikePoseLogo_02.png"

const styles = theme => ({
  menuText:{
    color: 'white', 
    fontWeight: 'bold',
    letterSpacing: 2,
    justifyContent: 'center',
    },
  root: { 
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',

    
    
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    backgroundColor: '#cc00cc',

  },
  appBar: {
    backgroundColor: '#cc00cc',
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    backgroundColor: '#B200B2',
    position: 'relative',
    width: drawerWidth,
    height: '100vh' 
  },
  drawerHeader: {
    height: '60',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 2px',
    ...theme.mixins.toolbar,
  },
  'overflow-x': 'scroll',
  content: {
    flexGrow: 1,
    width: '100%',
    height: 'calc(100% - 56px)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cc00cc',
    padding: 50,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});


 class Header extends Component{
    state = {
        open: false,
        anchor: 'left',
      };
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    
      handleChangeAnchor = event => {
        this.setState({
          anchor: event.target.value,
        });
      };

    render(){

        const { classes } = this.props;
        const { anchor, open } = this.state;
    
        const drawer = ( 
          <Drawer
            variant="persistent"
            anchor={anchor}
            onClose={this.handleDrawerToggle}

            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose} >
               <ChevronLeftIcon style={{ color: 'gold', height: 40, width: '100%' }}/>
              </IconButton>
            </div>
            <Divider />
            <MenuList>
                <MenuItem component={Link} to='/' onClick={this.handleDrawerClose}
                className={classes.menuText}>
                    Home
                </MenuItem >
                <Divider />

                <MenuItem component={Link} to='/cast' onClick={this.handleDrawerClose}
                className={classes.menuText}>
                    Cast
                </MenuItem>
                <Divider />

                <MenuItem className={classes.menuText}>
                    Chat
                </MenuItem>
                <Divider />

            </MenuList>
            
          </Drawer>
        );
    
        let before = null;
        let after = null;
    
        if (anchor === 'left') {
          before = drawer;
        } else {
          after = drawer;
        }    


        return(
            <Fragment>
            <CssBaseline/>
            <div className={classes.root}>
           
            <div className={classes.appFrame}>
              <AppBar

              position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
              >
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <img src={logo} alt='logo' style={{ height: '30px',  }}/>

                  {/* <Typography variant="title" color="inherit" noWrap>
                    Persistent drawer
                  </Typography> */}
                </Toolbar>
              </AppBar>
              {before}
              <main
                className={classNames(classes.content, classes[`content-${anchor}`], {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open,
                })}
              >
                <div className={classes.drawerHeader} />

                {this.props.children}

              </main>
              {after}
            </div>
          </div>
          </Fragment>
        )
    }
}
export default compose(
    withRouter,
    withStyles(styles)
  )(Header)
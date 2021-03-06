import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import NewChatButton from "./NewChatButton";

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        Чат с кем-то
      </Typography>

    </Toolbar>
    <NewChatButton/>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);

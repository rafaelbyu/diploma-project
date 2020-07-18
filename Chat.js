import React from 'react';
import { withStyles } from 'material-ui/styles'
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';



  const styles = {
    chatLayout: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '64px',
      height: '100%',
      overflow: 'hidden',
    },
  };

    // updateMessageData = (event, messageState) => {
    //   this.setState({
    //     [messageState]: event.target.value
    //   });
    // };

  const Chat = ({ classes, messages }) => (
    <main className={classes.chatLayout}>
      <ChatMessageList messages={messages} />
      <MessageInput /*updateMessageData = {this.updateMessageData}*//>
    </main>
  );

export default withStyles(styles)(Chat);

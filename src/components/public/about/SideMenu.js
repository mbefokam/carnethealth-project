import React from 'react'; 
import { ListItem, ListItemText } from 'material-ui/List';
import { Divider, Paper,   List } from 'material-ui';

const styles = {
  Paper: {
    
    marginTop: 80,
    marginBottom: 10,
    height: 400,
    overflowY: 100,
    width: '50%',
    overflowX: 100,
    border: '2px solid #2699FB',
    backgroundColor: '#E3F2FD',
  }
}

const DividerMenu = () => (
<div>
<Paper style={styles.Paper}>
<List component="nav"style={{
      marginTop: 60,
      marginBottom: 40
    }} >
       <Divider  />
      <ListItem button>
          <ListItemText primary="Vision" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Mission" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Our Team" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Disclaimer" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Privacy Policies" />
        </ListItem>
        <Divider />
    </List>
    </Paper>
</div> 

);
export default  DividerMenu;

//export default withStyles(styles)(DividerMenu);  


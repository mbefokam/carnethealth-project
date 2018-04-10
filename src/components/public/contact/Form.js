import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const howDidYouHearAboutUs = [
  {
    value: 'facebook.com',
    label: 'FaceBook',
  },
  {
    value: 'TV',
    label: 'TV Commercial',
  },
  {
    value: 'FromFriend',
    label: 'From A Friend',
  },
  {
    value: 'other',
    label: 'Others',
  },
];

class TextFields extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    howYouHear: 'Others',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="name"
          label="Email"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="name"
          label="Title"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="select-howYouHear"
          select
          label="How did you hear about CarnetHealth Inc "
          className={classes.textField}
          value={this.state.howYouHear}
          onChange={this.handleChange('howYouHear')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select an option"
          margin="normal"
        >
          {howDidYouHearAboutUs.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
         <InputTextarea rows={5} cols={60} autoResize={true} />
         </div>
         <Button variant="raised" color="primary" className={classes.button}>
           Submit
         </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

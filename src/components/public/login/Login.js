import React from 'react';
import { Route, Link } from 'react-router-dom';
import Button from 'material-ui/Button';
// import classNames from 'classnames';
import 'typeface-roboto';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import MenuItem from 'material-ui/Menu/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Select from 'material-ui/Select';
import Typography from 'material-ui/Typography';

import {NavItem }from  'react-bootstrap';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    zIndex: 1000,
    backgroundColor: '#000000',
    opacity: 0.5,
    textAlign: 'center',
  }
});

// const categories = [
//   {
//     value: 'patient',
//     label: 'Patient',
//   },
//   {
//     value: 'institution',
//     label: 'Institution',
//   },
//   {
//     value: 'provider',
//     label: 'Provider',
//   },
// ];
const signUp = < Link to="/sign-up"/>
class FormDialog extends React.Component {
  state = {
    open: false,
    password: '',
    showPassword: false,
    category: "",
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
   
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSignup=()=>{
    this.setState({ signUp});
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavItem onClick={this.handleClickOpen}>Login</NavItem>
        <Dialog
          aria-labelledby="form-dialog-title"
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
          styles={{
            zIndex: 1000,
            backgroundColor: '#000000',
            opacity: 0.5,
            textAlign: 'center',
        }}
        >
          <DialogTitle >
          <Typography variant="headline" gutterBottom>
          Login or Sign up to your profile CarnetHealth Inc.
          </Typography>
            </DialogTitle>
          <DialogContent>
            <FormControl className={styles.formControl}>
                <InputLabel htmlFor="name-simple">Categories</InputLabel>
                <Select
                  value={this.state.category}
                  onChange={this.handleChange("category")}
                  input={<Input id="name-simple" />}
                >
                  <MenuItem value={"Patient"}>
                  <Typography variant="headline" gutterBottom>
                        Patient
                   </Typography>
                  </MenuItem>
                  <MenuItem value={"Institution"}>
                  <Typography variant="headline" gutterBottom>
                       Institution
                   </Typography>
                  </MenuItem>
                  <MenuItem value={"Provider"}>
                  <Typography variant="headline" gutterBottom>
                        Provider
                   </Typography>
                  </MenuItem>
                </Select>
              </FormControl>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email or CarnetHealth ID"
              type="email"
              fullWidth
            />
            
        <FormControl styles={{margin: "spacing.unit",flexBasis: 200}}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            }
          />
        </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSignup} color="primary">
             Sign up
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Sign in
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}



FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);
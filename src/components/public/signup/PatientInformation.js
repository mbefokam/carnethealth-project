import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider';
import { MenuItem } from 'material-ui/Menu';
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';
import 'antd/dist/antd.css';
import { DatePicker, Radio } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import SelectGender from '../common/SelectGender';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputUnderline: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 20,
  },
});
//const date = new Date();
function CustomizedInputs(props) {
  const { classes } = props;
  
  return (
    <div className={classes.container}>
    <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
             <SelectGender/>
        </Grid>
    </Grid>
     <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="e.g Pierre"
        label="First Name"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="e.g Nkoulou"
        label="Last Name"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}/>
        </Grid>
      </Grid>
      <Divider inset />
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="e.g joedoe@gmail.com"
        label="Email"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <br />
        <DatePicker 
        placeholder="Date Of Birth"
        size="large" 
        defaultValue={moment('2015-01-01', 'YYYY-MM-DD')}
        />
        </Grid>
      </Grid>
     
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="6 57 89 23"
        label="Phone Number 1"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="6 90 34 56 21"
        label="Phone Number2"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
        </Grid>
      </Grid>
      <Divider inset />
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="CN 2319678934"
        label="Nation Id Number"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder="koko.charles"
        label="User Name"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
        </Grid>
        <Divider inset />
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder=" "
        label="Password"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        placeholder=""
        label="Re Enter Password"
        id="adornment-password"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}/>
        
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);

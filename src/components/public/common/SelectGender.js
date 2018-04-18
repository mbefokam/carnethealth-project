import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const gender = () => (
  <div>
    <div>
      <RadioGroup 
      onChange={onChange} 
      defaultValue="Male"
      name="Gender"
      size='large'
      >
        <RadioButton value="Male">Male</RadioButton>
        <RadioButton value="Female">Female</RadioButton>
      </RadioGroup>
    </div>

  </div>);

  export default gender; 
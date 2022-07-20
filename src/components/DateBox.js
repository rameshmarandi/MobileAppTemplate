import React, { Component, useState } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

import { getFontSize, getResHeight, getResWidth, SCREENHEIGHT, SCREENWIDTH } from '../utility/responsive';
import theme from '../theme';
import DatePicker from 'react-native-date-picker';
import { validateAge } from '../utility/commonHelper';

class DateBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      open: false,
      selecteddate: new Date(),
      isselecteddate: false,
    };
  }
  datetostring(selected) {
    try {
      if (selected.getDate()) {
        return `${selected.getDate()}/${selected.getMonth() + 1}/${selected.getFullYear()}`;
      }
    } catch (err) {
      return `${selected}`;
    }
  }

  render() {
    const { navigation } = this.props;
    const { changedate, validation, setdate, placeholder } = this.props;
    const { searchValue } = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ open: true });
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: '#f4f5f6',
          width: '95%',
          borderRadius: 5,
          alignItems: 'center',
          paddingVertical: '2%',
        }}
      >
        <Fontisto
          style={{
            // marginTop: validation ? "5%" : "10%",
            marginLeft: 12,
          }}
          name={'date'}
          size={getResWidth(12)}
          color={'#6A6A6A'}
        />
        <DatePicker
          modal
          open={this.state.open}
          date={this.state.selecteddate}
          mode="date"
          format="DD-MM-YYYY"
          textColor={theme.color.primary}
          onConfirm={async date => {
            await this.setState({ open: false });
            changedate(date);
            if (validation) {
              const isvalid = validateAge(date, 18);
              if (!isvalid.status) {
                alert(isvalid.message);
              }
            }

            this.setState({ selecteddate: date });
            this.setState({ isselecteddate: true });
          }}
          onCancel={() => {
            this.setState({ open: false });
          }}
        />
        <TextInput
          placeholder={placeholder}
          value={
            setdate
              ? this.datetostring(setdate)
              : this.state.isselecteddate
              ? this.datetostring(this.state.selecteddate)
              : null
          }
          style={{
            marginLeft: '4%',
            color: 'black',
              fontFamily: theme.font.latoRegular,
            fontSize: getFontSize(14),
          }}
          editable={false}
        />
      </TouchableOpacity>
    );
  }
}

export default DateBox;

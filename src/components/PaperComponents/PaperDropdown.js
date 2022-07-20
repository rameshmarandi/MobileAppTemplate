import React, {Component} from 'react';
import {ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-paper';

import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive';
import theme from '../../theme';

class PaperDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: null,
    };
    this.setValue = this.setValue.bind(this);
  }

  async setValue(callback) {
    await this.setState((state) => ({
      value: callback(state.value),
    }));
  }

  render() {
    const {zIndex, zIndexInverse, listMode} = this.props;
    const {items, defultItem, showArrow = true} = this.props;
    const {
      placeholderStyle,
      containerStyle,
      styledropdown,
      itemStyle,
      dropDownStyle,
    } = this.props;
    const {dropDownsetOpen, dropDownOpen, dropDownDirection} = this.props;
    const {
      inputRoundness,
      inputLabel,
      inputStyle,
      inputMode,
      inputPlaceholder,
      inputOutlineColor,
      inputDisabled,
    } = this.props;
    const setDefaultValue = () => {
      try {
        if (items != null || items.length != 0) {
          if (defultItem) {
            const isfillter = items.filter(function (item) {
              return item.value == defultItem.value;
            });
            if (isfillter.length != 0) {
              return defultItem.value + '';
            }
          }
        }
        return '';
      } catch (error) {
        return '';
      }
    };
    return (
      <TextInput
        theme={{
          colors: {
            primary: theme.color.primary,
            placeholder: '#989898',
          },
          roundness: inputRoundness ? inputRoundness : 7,
        }}
        label={setDefaultValue() != '' ? inputLabel : ''}
        value={setDefaultValue() != '' ? defultItem.label : ''}
        mode={inputMode ? inputMode : 'outlined'}
        outlineColor={inputOutlineColor ? inputOutlineColor : '#DCDCDC'}
        disabled={inputDisabled ? inputDisabled : false}
        style={[
          {
            width: '100%',
            height: getResHeight(40),
            backgroundColor: 'white',
          },
          inputStyle,
        ]}
        render={(inputProps) => {
          const getHight = () => {
            if (inputProps && inputProps.style) {
              inputProps.style.filter(function (obj) {
                if (Object.keys(obj).length != 0 && obj.height) {
                  return obj.height;
                }
              });
            }
            return getResHeight(45);
          };
          return (
            <DropDownPicker
              zIndex={zIndex ? zIndex : 10000}
              zIndexInverse={zIndexInverse ? zIndexInverse : 10000}
              listMode={listMode ? listMode : 'SCROLLVIEW'}
              mode="SIMPLE"
              closeOnBackPressed={true}
              bottomOffset={100}
              dropDownDirection={dropDownDirection ? dropDownDirection : 'AUTO'}
              showArrowIcon={showArrow}
              showTickIcon={false}
              disabled={inputDisabled ? inputDisabled : false}
              open={
                typeof dropDownOpen == 'boolean'
                  ? dropDownOpen
                  : this.state.open
              }
              setOpen={(open) => {
                this.setState({open});
                if (dropDownsetOpen) {
                  dropDownsetOpen(open);
                }
              }}
              onSelectItem={this.props.onChangeItem}
              items={items.map((el) => {
                let currentVal = setDefaultValue();
                if (el.value == currentVal) {
                  el.disabled = true;
                  return el;
                }
                return el;
              })}
              value={setDefaultValue()}
              setValue={this.setValue}
              placeholder={inputPlaceholder ? inputPlaceholder : ''}
              placeholderStyle={[
                {
                  fontSize: getFontSize(15),
                  color: inputProps.placeholderTextColor,
                },
                placeholderStyle,
              ]}
              containerStyle={[
                {
                  width: '100%',
                  height: getHight(),
                  alignSelf: 'center',
                  backColor: '#EDEDED',
                  
                  
                },
                containerStyle,
              ]}
              style={[
                {
                  width: '100%',
                  height: '100%',
                  // backgroundColor:"green",
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                },
                styledropdown,
              ]}
              itemStyle={[
                {
                  justifyContent: 'flex-start',
                },
                itemStyle,
              ]}
              maxHeight={300 >= SCREENHEIGHT ? 200 : 300}
              dropDownContainerStyle={[
                {
                  width: '98.5%',
                  alignSelf: 'center',                 
                  backgroundColor: '#ffffff',
                  borderColor: '#EDEDED',
                  borderRadius: 8,
                  marginTop:"-1%",
                  marginBottom: '1%',
                  borderColor: '#CCCCCC',
                },
                dropDownStyle,
              ]}
              disabledItemContainerStyle={{}}
              selectedItemLabelStyle={{
                fontFamily: theme.font.semiBold,
              }}
            />
          );
        }}
      />
    );
  }
}

export default PaperDropdown;

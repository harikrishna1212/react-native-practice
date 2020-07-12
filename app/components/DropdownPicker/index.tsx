import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class DropdownPicker extends React.Component {
  @observable selectedValue = 'CSE';
  setSelectedValue = (value: any) => {
    this.selectedValue = value;
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.selectedValue}
          style={{
            height: 50,
            width: 150,
            borderWidth: 3,
            backgroundColor: 'blue',
          }}
          onValueChange={(itemValue, itemIndex) =>
            this.setSelectedValue(itemValue)
          }>
          <Picker.Item label="ECE" value="ece" />
          <Picker.Item label="CSE" value="cse" />
          <Picker.Item label="IT" value="it" />
          <Picker.Item label="Mech" value="mech" />
          <Picker.Item label="CIVIL" value="civil" />
          <Picker.Item label="EIE" value="eie" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 3,
  },
});

export default DropdownPicker;

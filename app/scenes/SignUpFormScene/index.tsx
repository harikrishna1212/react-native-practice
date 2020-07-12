import React from 'react';
import {TextInput, Button, Alert, StyleSheet, View, Text} from 'react-native';
import DropdownPicker from '../../components/DropdownPicker';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class SignUpFormRouteComponent extends React.Component {
  render() {
    return (
      <>
        <View style={styles.namesView}>
          <TextInput style={styles.firstAndLastName} placeholder="Firstname" />
          <TextInput style={styles.firstAndLastName} placeholder="Lastname" />
        </View>
        <View style={styles.MobileAndEmailAndPasswordView}>
          <TextInput
            style={styles.MobileAndEmailAndPassword}
            placeholder="Mobile Number"
          />
          <TextInput
            style={styles.MobileAndEmailAndPassword}
            placeholder="Email"
          />
          <TextInput
            style={styles.MobileAndEmailAndPassword}
            placeholder="Password"
          />
          <TextInput
            style={styles.MobileAndEmailAndPassword}
            placeholder="Confirm Password"
          />
        </View>
        <View>
          <>Select Your Branch<Text/>
          <DropdownPicker />
        </View>

        <View style={styles.addressView}>
          <Text
            style={{
              flex: 0.8,
            }}>
            Enter Your Addrerss Here
          </Text>
          <TextInput
            placeholder="Type Your Address here!.."
            style={{flex: 1, borderWidth: 3, borderColor: 'gray'}}
          />
        </View>
        <View style={{margin: 10}}>
          <Text>Set your typing speed </Text>
        </View>
        <View style={styles.signUpButton}>
          <Button
            title="Sign Up"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>

        {/* <View>
          <RadioForm radio_props={radio_props} />
        </View> */}
      </>
    );
  }
}
const styles = StyleSheet.create({
  namesView: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstAndLastName: {
    height: 50,
    borderWidth: 3,
    borderColor: 'gray',
    flex: 0.48,
    padding: 5,
  },
  MobileAndEmailAndPasswordView: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'green',
  },
  MobileAndEmailAndPassword: {
    height: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'gray',
    padding: 5,
  },
  addressView: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signUpButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // selectYourBranch: {
  //   flexDirection: 'row',
  //   width: 30,
  //   // borderColor: 'green',
  //   // borderWidth: 3,
  // },
  // dropdownPicker: {
  //   justifyContent: 'flex-start',
  //   height: 40,
  // },
});
export default SignUpFormRouteComponent;

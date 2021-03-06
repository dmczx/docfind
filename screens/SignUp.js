import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
import * as firebase from 'firebase';
import Head from './Head';
import Photo from './images/Photo';
import { db } from './config/db';

export default class SignUp extends React.Component {


  state = { email: '', password: '', errorMessage: null, name: '', sp: '', clinic: '',phone: '', edu: ''}

  handleSignUp(navigate){
        // To Configure react native app with cloud of Google Firebase database !
      
        // To select data from firebase every time data has changed !
        // firebase.database().ref('users').on('value', (data) => {
        //     console.log(data.toJSON());
        // })

        // To Await 5 seconds to insert a new user
        setTimeout(() => {

          const data = {
            Name: this.state.name,
            sp: this.state.sp,
            Education: this.state.edu,
            clinic : this.state.clinic,
            PhoneNumber: this.state.phone
        }
            firebase.database().ref('users').push(data).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);});
        }, 5);

        // To Update a user
        // firebase.database().ref('users/004').update({
        //     name: 'Pheng Sengvuthy'
        // });

        // To Remove a user
      //  firebase.database().ref('users/004').remove();

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(firebaseUser){
          //Success
          console.log("Correct!")
          alert("Account created successfully")
        //  navigate("Lis");
        }).catch(function(error){
            alert("Error : The format is not correct OR account already exists!")
        });
     
      }
    
      
    static navigationOptions = {
        title: 'Register',
       // headerLeft: null,
       // gesturesEnabled: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#c60512',
          borderBottomColor: '#c60512',
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
      };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View
            style={{
              backgroundColor: 'white',
              height: 800,
            }}>

            {/* <Photo /> */}
    
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                 />
                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Password"
                secureTextEntry={true}
                autoCorrect={false}
                placeholderTextColor="white"
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
                  />


                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Full Name"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(name) => this.setState({name})}
                 />

                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Medical specialty"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(sp) => this.setState({ sp })}
                />

                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Education"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(edu) => this.setState({ edu})}
                />

                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Clinic"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(clinic) => this.setState({clinic})}
                 />

                <TextInput
                style={styles.input}
                full
                rounded
                success
                placeholder="Clinic Phone Number"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(phone) => this.setState({phone})}
                 />
    
                <Button
                style={styles.bt1}
                full
                rounded
                primary
                onPress={() => this.handleSignUp(navigate)}   
                title="SignUp"
                color="white"
                backgroundColor="#c60512"
                 />

              <Text > Already have an account ? </Text> 



       < Text style = {styles.bt } onPress={() => navigate('Login')}>  click here </Text>


            </View>
          </View>
          </ScrollView>

            // <Container style={styles.container}>
            // <Photo/>
            //     <Form>
            //         <Item floatingLabel>
            //             <Label>Email</Label>
            //             <Input
            //                 autoCorrect={false}
            //                 autoCapitalize="none"
            //                 onChangeText={(email) => this.setState({ email })}
            //             />

            //         </Item>

            //         <Item floatingLabel>
            //             <Label>Password</Label>
            //             <Input
            //                 secureTextEntry={true}
            //                 autoCorrect={false}
            //                 autoCapitalize="none"
            //                 onChangeText={(password) => this.setState({ password })}
            //             />
            //         </Item>

            //         <Button style={{ marginTop: 10 }}
            //             full
            //             rounded
            //             success
            //             onPress={() => this.loginUser(this.state.email, this.state.password)}
            //         >
            //             <Text style={{ color: 'white' }}> Login</Text>
            //         </Button>

            //         <Button style={{ marginTop: 10 }}
            //             full
            //             rounded
            //             primary
            //             onPress={() => this.signUpUser(this.state.email, this.state.password)}
            //         >
            //             <Text style={{ color: 'white' }}> Sign Up</Text>
            //         </Button>

            //     </Form>
            // </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#c60512',
      margin: 7,
      padding: 8,
      color: 'white',
      borderRadius: 10,
      fontSize: 18,
      fontWeight: '500',
      opacity: 1,
    },
    bt: {
      color : '#c60512',
      marginTop: 20,
      marginBottom: 40,
    },
    bt1: {
        width: 150,
        height: 44,
        borderRadius: 10,
        margin: 15,
        left: 0,
        top:-10,
      },
    container: {
      marginTop: 40,
   //   marginBottom: 500,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
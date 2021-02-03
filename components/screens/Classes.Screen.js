import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';



export default class ClassesScreen extends React.Component {

  state = {
    ready: false,
    Ateacher: "",
    Bteacher: "",
    Cteacher: "",
    Dteacher: "",
    Eteacher: "",
    Fteacher: "",
    GAteacher: "",
    Zteacher: "",
    Tteacher: "",
    Xteacher: "",
  }


    onPress(block){
        if (this.state[block + 'teacher'] != null){
        this.props.navigation.navigate('Messages', {block: block, teacher: this.state[block + 'teacher'] })
        }
        else{
          Alert.alert(
						"You need to customize your " + block + " Block class first!",
            "",
						[
						  {
							text: "Cancel",
							style: "cancel"
						  },
						  { text: "Customize", onPress: () => this.props.navigation.navigate('Customize')}
						],
						{ cancelable: false }
					  );
        }
    }
    


      retrieveData = async()  => {
        try{
      this.state.Ateacher = await AsyncStorage.getItem('Ateacher');
      this.state.Bteacher = await AsyncStorage.getItem('Bteacher');
      this.state.Cteacher = await AsyncStorage.getItem('Cteacher');
      this.state.Dteacher = await AsyncStorage.getItem('Dteacher');
      this.state.Eteacher = await AsyncStorage.getItem('Eteacher');
      this.state.Fteacher = await AsyncStorage.getItem('Fteacher');
      this.state.Gteacher = await AsyncStorage.getItem('Gteacher');
      this.state.Zteacher = await AsyncStorage.getItem('Zteacher');
      this.state.Tteacher = await AsyncStorage.getItem('Tteacher');
      this.state.Xteacher = await AsyncStorage.getItem('Xteacher');
        }
        catch(error){
            console.info(error);
    }
    this.setState({ready: true})
    }

    componentDidMount() {
      this._unsubscribe = this.props.navigation.addListener('focus', () => {
        this.retrieveData();
      });
      
    }

    componentWillUnmount() {
      this._unsubscribe();
    }



	render() {
    if (!this.state.ready){
      return(null);
    }
		return (
			
			<View style={styles.container}>
                <View style = {{flexDirection: 'row'}}> 

                <View style={{flex:1, margin: 20}}>
				<TouchableOpacity style = {styles.button} onPress={() => this.onPress('A')}>
					<Text style = {styles.buttonText}>A Block</Text>
				</TouchableOpacity>
                </View>

				<View style={{flex:1, margin: 20}}>
                <TouchableOpacity style = {styles.button} onPress={() => this.onPress('B')}>
					<Text style = {styles.buttonText}>B Block</Text>
				</TouchableOpacity>
                </View>

                </View>

                <View style = {{flexDirection: 'row'}}> 

                <View style={{flex:1, margin: 20}}>
				<TouchableOpacity style = {styles.button} onPress={() => this.onPress('C')}>
					<Text style = {styles.buttonText}>C Block</Text>
				</TouchableOpacity>
                </View>

				<View style={{flex:1, margin: 20}}>
                <TouchableOpacity style = {styles.button} onPress={() => this.onPress('D')}>
					<Text style = {styles.buttonText}>D Block</Text>
				</TouchableOpacity>
                </View>

                </View>

                <View style = {{flexDirection: 'row'}}> 

                <View style={{flex:1, margin: 20}}>
				<TouchableOpacity style = {styles.button} onPress={() => this.onPress('E')}>
					<Text style = {styles.buttonText}>E Block</Text>
				</TouchableOpacity>
                </View>

				<View style={{flex:1, margin: 20}}>
                <TouchableOpacity style = {styles.button} onPress={() => this.onPress('F')}>
					<Text style = {styles.buttonText}>F Block</Text>
				</TouchableOpacity>
                </View>

                </View>

                <View style = {{flexDirection: 'row'}}> 

                <View style={{flex:1, margin: 20}}>
				<TouchableOpacity style = {styles.button} onPress={() => this.onPress('G')}>
					<Text style = {styles.buttonText}>G Block</Text>
				</TouchableOpacity>
                </View>

				<View style={{flex:1, margin: 20}}>
                <TouchableOpacity style = {styles.button} onPress={() => this.onPress('Z')}>
					<Text style = {styles.buttonText}>Z Block</Text>
				</TouchableOpacity>
                </View>

                </View>

                <View style = {{flexDirection: 'row'}}> 

                <View style={{flex:1, margin: 20}}>
				<TouchableOpacity style = {styles.button} onPress={() => this.onPress('T')}>
					<Text style = {styles.buttonText}>T Block</Text>
				</TouchableOpacity>
                </View>

				<View style={{flex:1, margin: 20}}>
                <TouchableOpacity style = {styles.button} onPress={() => this.onPress('X')}>
					<Text style = {styles.buttonText}>X Block</Text>
				</TouchableOpacity>
                </View>

                </View>

                
			</View>
		);
	}
}

const styles = StyleSheet.create({
	
	container: {
    flex: 1,
		backgroundColor: '#0F182D',
		alignItems: 'center',
		justifyContent: 'center',
    },

    button: {
		backgroundColor: '#871609',
		padding: 20,
		borderRadius: 20,
		margin: 0,
		
    },
    buttonText: {
		fontSize: 20,
      color: '#fff',
      fontFamily: 'Red Hat Display',
	},
});

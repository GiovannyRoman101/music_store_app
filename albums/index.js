// import a library
import React from 'react'
import { AppRegistry, View} from 'react-native'
import Header from './src/components/header.js'
import Ablum_List from './src/components/album_lists.js'
// create a component
const App = () => (
	<View style= {{flex:1}}>
		<Header headerText ={'Albums!'} ></Header>
		<Ablum_List></Ablum_List>
	</View>
)
// render the component to device
AppRegistry.registerComponent('albums', () => App)

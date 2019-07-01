import React,{Component} from 'react'
import { ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetail from './album_detail.js'

// use class components to fetch data or have large 
// components that require helper methods

const url = 'https://rallycoding.herokuapp.com/api/music_albums'

// onlt requirement is to implement render method
class Album_List extends Component{

	// state is used to record and response to user-triggered events
	// only in class based components
	constructor(){
		super()
		this.state = {albums : []}
	}
	renderAlbums(){
		return this.state.albums.map((album) =>{
			return (<AlbumDetail key ={album.title} album = {album}></AlbumDetail>)
		})
	}

	// life cycle methods know when components will be rendered
	// used to retrieve data

	componentWillMount(){
		axios.get(url).then((response) =>{
			this.setState({albums: response.data})
		})
	}
	render(){
		console.log(this.state)
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		)
	}
}
export default Album_List
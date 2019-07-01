import React from 'react'
import {View, Text, Image,Linking} from 'react-native'
import Card from './card.js'
import CardSection from './card_section.js'
import Button from './button.js'

const AlbumDetail = ({album}) =>{
	const {title,artist,thumbnail_image,image,url} = album
	const{thumbnailStyle,textContainerStyle,
		thumbnailContainerStyle, headerTextStyle,
		albumStyle
	} = styles
	return (
		<Card>
			<CardSection>
				<View style = {thumbnailContainerStyle}>
					<Image style = {thumbnailStyle}
						source = {{uri:thumbnail_image}}></Image>
				</View>
				<View style = {textContainerStyle}>
					<Text style = {headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image source = {{uri:image}} style = {albumStyle}></Image>
			</CardSection>

			<CardSection>
				<Button onPress={()=>{Linking.openURL(url)}}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
		
	)
}
const styles = {
	textContainerStyle:{
		flexDirection: 'column',
		justifyContent: 'space-around'

	},
	headerTextStyle:{
		fontSize:18,

	},
	thumbnailStyle:{
		height:50,
		width:50
	},
	albumStyle:{
		height: 300,
		flex:1,
		width:null
	},
	thumbnailContainerStyle:{
		justifyContent: 'center',
		alignItems:'center',
		marginLeft:10,
		marginRight:10
	}
}

export default AlbumDetail
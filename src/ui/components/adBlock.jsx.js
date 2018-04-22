import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const AdBlock = props => {
	return (
		<Card>
			<RaisedButton 
			 	label={props.ad.callToAction}
		        secondary={true}
		        href={props.ad.url}
		        fullWidth={true}
		        buttonStyle={{borderRadius: "0", background: "#FF1744"}}/>
			<CardMedia>
			    <img src={props.ad.src} />
			 </CardMedia>
			 
		</Card>
	);
};

export default AdBlock;
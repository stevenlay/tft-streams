import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const StreamCard = (props) => {
    console.log(props.stream);
    return (
        <Card href={props.stream.channel.url}>
            <Card.Content>
                <Image floated='right' size='mini' src={props.stream.channel.logo} />
                <Card.Header>{props.stream.channel.display_name}</Card.Header>
                <Card.Meta>{props.stream.viewers} viewers</Card.Meta>
                <Card.Description>{props.stream.channel.status}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                    Synergies
            </Card.Content>
        </Card>

    )
}

export default StreamCard;
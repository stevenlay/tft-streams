import React,  { useState, useEffect } from 'react';
import { Container, Card } from 'semantic-ui-react';
import api from '../apis/streams';
import StreamCard from './StreamCard';

const Streams = () => {
    const [streams, setStreams] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get(`/kraken/streams?game=Teamfight%20Tactics`);
            setStreams(result.data.streams);
        }
        fetchData();
    }, []);
    return (
        <Container>
            <h1 className="title">Teamfight Tactics Streams</h1>
            <Card.Group className="ui centered">
                {streams.map(stream => 
                    <StreamCard stream={stream}/>
                )}
            </Card.Group>
        </Container>
    )
}

export default Streams;
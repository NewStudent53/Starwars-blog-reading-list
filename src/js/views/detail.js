import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SWAPIContext } from '../context/SWAPIContext';
import { Container, Card } from 'react-bootstrap';

const Detail = () => {
    const { id } = useParams();
    const { state } = useContext(SWAPIContext);
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`); // Cambia 'people' por la entidad que necesites
            const data = await response.json();
            setDetail(data.result);
        };

        fetchData();
    }, [id]);

    return (
        <Container>
            <h1>Detail</h1>
            {detail && (
                <Card>
                    <Card.Body>
                        <Card.Title>{detail.properties.name}</Card.Title>
                        <Card.Subtitle>{detail.properties.species}</Card.Subtitle>
                        <Card.Text>
                            {/* Renderiza la información de los detalles aquí */}
                            {detail.properties.roles && (
                                <p><strong>Role:</strong> {detail.properties.roles.join(', ')}</p>
                            )}
                            <p><strong>Height:</strong> {detail.properties.height}</p>
                            <p><strong>Mass:</strong> {detail.properties.mass}</p>
                            <p><strong>Homeworld:</strong> {detail.properties.homeworld}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default Detail;

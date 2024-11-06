import React, { useContext } from 'react';
import { SWAPIContext } from '../context/SWAPIContext';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { state, dispatch } = useContext(SWAPIContext);

    const removeFromFavorites = (item) => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    };

    const styles = {
        body: {
            backgroundColor: 'black',
            color: 'white',
            minHeight: '100vh',
            padding: '20px'
        },
        card: {
            backgroundColor: '#333',
            color: 'white',
            marginBottom: '20px'
        }
    };

    return (
        <div style={styles.body}>
            <Container>
                <h1>Favorites</h1>
                {state.favorites.length === 0 && <p>No favorites yet</p>}
                <Row>
                    {state.favorites.map(fav => (
                        <Col key={fav.uid} sm={12} md={6} lg={4}>
                            <Card style={styles.card}>
                                <Card.Body>
                                    <Card.Title>{fav.name}</Card.Title>
                                    <Card.Text>
                                        {/* Render favorite item details */}
                                    </Card.Text>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to={`/detail/${fav.uid}`}>
                                            <Button variant="primary">View Details</Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => removeFromFavorites(fav)}>
                                            Remove
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Favorites;

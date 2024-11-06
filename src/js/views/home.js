import React, { useEffect, useContext } from 'react';
import { SWAPIContext } from '../context/SWAPIContext';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Home = () => {
    const { state, dispatch } = useContext(SWAPIContext);

    useEffect(() => {
        const fetchData = async () => {
            const peopleResponse = await fetch('https://www.swapi.tech/api/people');
            const peopleData = await peopleResponse.json();
            dispatch({ type: 'SET_PEOPLE', payload: peopleData.results });

            const vehiclesResponse = await fetch('https://www.swapi.tech/api/vehicles');
            const vehiclesData = await vehiclesResponse.json();
            dispatch({ type: 'SET_VEHICLES', payload: vehiclesData.results });

            const planetsResponse = await fetch('https://www.swapi.tech/api/planets');
            const planetsData = await planetsResponse.json();
            dispatch({ type: 'SET_PLANETS', payload: planetsData.results });
        };

        fetchData();
    }, [dispatch]);

    const addToFavorites = (item) => {
        dispatch({ type: 'ADD_FAVORITE', payload: item });
    };

    const styles = {
        logoContainer: {
            position: 'absolute',
            top: '10px',
            left: '10px'
        },
        starWarsLogo: {
            width: '100px',
            height: 'auto'
        },
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
        },
        sectionTitle: {
            color: 'yellow',
            fontSize: '2em',
            margin: '20px 0'
        }
    };

    return (
        <div style={styles.body}>
            <Container>
                <div style={styles.logoContainer}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars Logo" style={styles.starWarsLogo} />
                </div>
                <h1>Star Wars Database</h1>
                <div style={styles.sectionTitle}>CHARACTERS</div>
                <Row>
                    {state.people.map(person => (
                        <Col key={person.uid} sm={12} md={6} lg={4}>
                            <Card style={styles.card}>
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                    <Card.Text>
                                        {/* Agrega más detalles aquí */}
                                    </Card.Text>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to={`/detail/${person.uid}`}>
                                            <Button variant="primary">View Details</Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => addToFavorites(person)}>
                                            <FaHeart /> Favorite
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div style={styles.sectionTitle}>PLANETS</div>
                <Row>
                    {state.planets.map(planet => (
                        <Col key={planet.uid} sm={12} md={6} lg={4}>
                            <Card style={styles.card}>
                                <Card.Body>
                                    <Card.Title>{planet.name}</Card.Title>
                                    <Card.Text>
                                        {/* Agrega más detalles aquí */}
                                    </Card.Text>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to={`/detail/${planet.uid}`}>
                                            <Button variant="primary">View Details</Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => addToFavorites(planet)}>
                                            <FaHeart /> Favorite
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

export default Home;

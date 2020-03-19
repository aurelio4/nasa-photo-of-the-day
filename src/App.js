import React, {useState, useEffect} from "react";
import Card from './components/Card/DataCard'
import "./App.css";
import axios from "axios";
import {
  Container,
  Row,
  Col
} from 'reactstrap'

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  
  const styles = {
    margin: '2% 0 0 0',
  };

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=G3RpUHvQnI51bjvhOUM0yOactiALiM53d8rcuOBw')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch(error => { console.error(error)})
  }, [])
  return (
    <div className="App">
      <Container>
        <Row style={styles}>
          <Col xs="6" sm="4"><Card data={data} loading={loading} /></Col>
          <Col xs="6" sm="4"><Card data={data} loading={loading} /></Col>
          <Col xs="6" sm="4"><Card data={data} loading={loading} /></Col>
        </Row>
        <Row style={styles}>
          <Col xs="6" sm="4"><Card data={data} loading={loading} /></Col>
          <Col xs="6" sm="4"><Card data={data} loading={loading} /></Col>
          <Col xs="6" sm="4"><Card data={data} loading={loading} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import Card from './components/Card/Card'
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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
      <h1>This is the app file</h1>
      <Card data={data} loading={loading} />
    </div>
  );
}

export default App;

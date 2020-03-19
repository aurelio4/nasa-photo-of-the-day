import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  Spinner
} from 'reactstrap'

function DataCard({ data, loading }) {
  return loading ?
    <Spinner color="dark" /> : 
    (
      <div>
        {console.log(data)}
        <Card>
        <CardHeader tag="h3">{data.title}</CardHeader>
        <CardImg top width="100%" src={data.hdurl} alt="space image" />
        <CardBody>
          <CardTitle>{data.date}</CardTitle>
          <CardText>{data.explanation}</CardText>
        </CardBody>
        <CardFooter className="text-muted">{data.copyright}</CardFooter>
      </Card>
      </div>
    )
}

export default DataCard
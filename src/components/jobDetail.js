import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";
import Card from 'react-bootstrap/Card'
export default class JobDetail extends React.Component {
  render() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.offer.poster} />
        <Card.Body>
        <Card.Title>{this.props.offer.name}</Card.Title>
          <Card.Text>
         {this.props.offer.description} 
          </Card.Text>
          <Card.Text>Cast: 
         {" " +this.props.offer.cast} 
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

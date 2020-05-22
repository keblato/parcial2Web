import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";
export default class Job extends React.Component {
  handleClick (job) {
    this.props.displayDetail(job)
  }
  render() {
    return (
      <tr onClick={()=>this.handleClick(this.props.offer)}>
        <th scope="row">{this.props.offer.id}</th>
        <td>{this.props.offer.name}</td>
        <td>{this.props.offer.directedBy}</td>
        <td>{this.props.offer.country}</td>
        <td>{this.props.offer.budget}</td>

        <td>
          {" "}
          <FormattedDate
            value={new Date(this.props.offer.releaseDate)}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </td>
        <td>
          <FormattedNumber
            value={this.props.offer.views}
            notation="compact"
            compactDisplay="short"
          />
        </td>
      </tr>
    );
  }
}

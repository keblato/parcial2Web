import React from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";
import Table from "react-bootstrap/Table";
import JobDetail from "./jobDetail";

export default class JobsList extends React.Component {
  state = {
    data: [],
    displayDetail: false,
    detail : ''
  };
  componentDidMount() {
    if (!navigator.onLine) {
      if (localStorage.getItem("data") === null)
        this.setState({ data: "loading..." });
      else this.setState({ data: localStorage.getItem("data") });
    }

    const locale =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      "en-US";
    let url = "";
    if (locale === "en-US") {
      url =
        "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
    } else {
      url =
        "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
    }
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ data: res });
        localStorage.setItem("data", res);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }
  displayDetail= (job) => {
    console.log(job)
    this.setState({
      displayDetail: !this.state.displayDetail

    })
    this.setState({
      detail: job

    })
}
displayDetailNow (){
  if (this.state.displayDetail){
    return(
      <JobDetail offer={this.state.detail}></JobDetail>
    )
  }
}
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                {" "}
                <FormattedMessage id="Name" />
              </th>
              <th scope="col">
                <FormattedMessage id="Directed_by" />
              </th>
              <th scope="col">
                <FormattedMessage id="Country" />
              </th>
              <th scope="col">
                <FormattedMessage id="Budget" />
              </th>
              <th scope="col">
                <FormattedMessage id="Release" />
              </th>
              <th scope="col">
                <FormattedMessage id="Views" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((e, i) => (
              <Job key={i} offer={e} displayDetail = {this.displayDetail}  />
            ))}
          </tbody>
        </Table>

        <div>
          { this.displayDetailNow()}
        </div>
      </div>
    );
  }
}

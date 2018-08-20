import React, { Component } from "react";
class backup extends Component {
  render() {
    let brew = this.state.breweries.map((brewer, i) => {
      return (
        <table>
          <tr key={i}>
            <th scope="row" id="">
              {brewer.name}
            </th>
            <td id="">{brewer.address}</td>
            <td id="">{brewer.email}</td>
            <td id="">{brewer.city}</td>
            <td id="">{brewer.phone}</td>
            <td id="">{brewer.state}</td>
            <td id="">{brewer.postal_code}</td>
            <td id="">{brewer.brewery_type}</td>
            <td id="">{brewer.updated_at}</td>
            <td>
              <input
                className="Name"
                type="text"
                onChange={e => this.nameInputHundler(e)}
                placeholder="Name"
                value={this.state.breweries.name}
              />
            </td>
            <td>
              <button onClick={() => this.deleteBrew()}>Delete</button>
            </td>
            <td>
              <button onClick={() => this.updateBrew()}>Update</button>
            </td>
          </tr>
        </table>
      );
    });

    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>E-MAIL</th>
              <th>CITY</th>
              <th>PHONE</th>
              <th>STATE</th>
              <th>POSTAL CODE</th>
              <th>BREWERY TYPE</th>
              <th>UPDATED AT</th>
              <th />
            </tr>
          </thead>
          <tbody> {brew} </tbody>
        </table>
      </div>
    );
  }
}

export default backup;

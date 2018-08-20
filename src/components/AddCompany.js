// import React, { Component } from "react";
// import App from "./App";
// import AddCompany from "./Component/AddCompany";
// class AddCompany extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <h2 id="banner">Brewery Companies </h2>
//           <div>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Address</th>
//                   {/* <th>Email</th> */}
//                   <th>City</th>
//                   <th>Phone</th>
//                   <th>State</th>
//                   <th>P_code</th>
//                   <th>Type</th>
//                   <th>Updated</th>
//                   <th />
//                 </tr>
//               </thead>
//               <tbody className="alert alert-info">{this.props.brew}</tbody>
//             </table>
//           </div>
//         </div>

//         <form className="form_box" onSubmit={this.props.addBrew}>
//           <p className="h4 mb-4">Create Company</p>
//           <h6>Name</h6>
//           <input
//             className="Name"
//             type="text"
//             onChange={e => this.nameInputHundler(e)}
//             placeholder="Name"
//             value={this.state.breweries.name}
//           />
//           <h6>Address</h6>
//           <input
//             className="address"
//             type="text"
//             onChange={e => this.addressInputHundler(e)}
//             placeholder="Address"
//             value={this.state.breweries.address}
//           />
//           <h6>City</h6>
//           <input
//             className="City"
//             type="text"
//             onChange={e => this.cityInputHundler(e)}
//             placeholder="City"
//             value={this.state.breweries.city}
//           />
//           <h6>State</h6>
//           <input
//             className="state"
//             type="text"
//             onChange={e => this.stateInputHundler(e)}
//             placeholder="State"
//             value={this.state.breweries.state}
//           />
//           <h6>brewery_type</h6>
//           <input
//             className="brewery_type"
//             type="text"
//             onChange={e => this.brewery_typeHundler(e)}
//             placeholder="Brewery_type"
//             value={this.state.breweries.brewery_type}
//           />
//           <br />
//           <br />
//           <button className="btn btn-primary btn-sm">
//             Add Brewery Company
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddCompany;

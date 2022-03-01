import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import DefaultUserPic from "../../uploads/Default.jpg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      firstname: "",
      lastname: "",
      image: ""
    }
  }

  changeImage = (event) => {

    this.setState({ uploadedFile: event.target.files[0] });
  }


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {


    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">

            <h4>Edit Account</h4>

            <div class="row justify-content-center">
              <div class="col-md-6">
                <label for="username">Username</label>
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  id="username"
                  type="text"
                />
              </div>
              <div class="col-md-6">
                <label for="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                />
              </div>
              <div class="col-md-6">
                <label for="password">Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  id="password2"
                  type="password"
                />
              </div>
              <div class="col-md-6">
                <label for="firstname">Firstname</label>
                <input
                  onChange={this.onChange}
                  value={this.state.firstname}
                  id="firstname"
                  type="text"
                />
              </div>
              <div class="col-md-6">
                <label for="lastname">Lastname</label>
                <input
                  onChange={this.onChange}
                  value={this.state.lastname}
                  id="lastname"
                  type="text"
                />
              </div>
              <div class="col-md-6">
                <div><span> Upload Profile </span></div>
                <input
                  onChange={this.changeImage}
                  value={this.state.image}
                  id="image"
                  type="file"
                />
              </div>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Save Change
              </button>
            </div>
            <div>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

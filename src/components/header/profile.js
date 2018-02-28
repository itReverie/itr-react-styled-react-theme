import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';
import profileIcon from "../../icons/profileImage.svg";

const Image= styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px;
  object-fit: cover;
  object-position: center right;
`;

const Container= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default class Profile extends Component {

  render() {
    return <Container>
            <Image src={profileIcon} alt="profile" title="Profile"></Image>
            <div>Welcome, {this.props.firstName} !</div>
           </Container>

  }
}

Profile.propTypes={
  firstName : PropTypes.string.isRequired
};


Profile.defaultProps={
  firstName : 'Charles'
};

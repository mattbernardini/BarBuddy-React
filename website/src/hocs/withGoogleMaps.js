import React, { Component } from 'react';
import { createClient } from '@google/maps';

export default ({ component: Component, ...rest }) => {
    const WithGoogleMaps = props => <Component {...props} />

    const googleMapsClient
}

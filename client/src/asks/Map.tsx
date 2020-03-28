import React, { Component, Props } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJoLTIwMjAiLCJhIjoiY2s4Ym8wMWl0MGFxaDNsbzJ6enJvczVuZSJ9.kxCR6p_zzoh-4M1Y6tOAug';
type AppProps = {}

interface AppState {
    lng: number,
    lat: number,
    zoom: number
}

export class Map extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            lng: -77,
            lat: 39,
            zoom: 8,
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                <div id="map" />
            </div>
        )
    }
}
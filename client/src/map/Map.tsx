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
            lng: 5,
            lat: 34,
            zoom: 2,
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        // map.on('move', () => {
        //     this.setState({
        //         lng: map.getCenter().lng.toFixed(4),
        //         lat: map.getCenter().lat.toFixed(4),
        //         zoom: map.getZoom().toFixed(2)
        //     });
        // });
    }

    render() {
        return (
            <div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div id="map" className='mapContainer' />
            </div>
        )
    }
}

// ReactDOM.render(<Map />, document.getElementById('map'));
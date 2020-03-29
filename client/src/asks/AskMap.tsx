import React, { FunctionComponent } from "react";
import { AskListProps } from "./AskList";
import styles from './Asks.module.scss';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJoLTIwMjAiLCJhIjoiY2s4Ym8wMWl0MGFxaDNsbzJ6enJvczVuZSJ9.kxCR6p_zzoh-4M1Y6tOAug';
type AppProps = {}

interface AppState {
    lng: number,
    lat: number,
    zoom: number
}

export const AskMap: FunctionComponent<AskListProps> = ({ asks, fetching }) => {
    let map: mapboxgl.Map;
    class ResourceMap extends React.Component<AppProps, AppState> {
        constructor(props: AppProps) {
            super(props);
            this.state = {
                lng: -77,
                lat: 39,
                zoom: 8,
            };
        }

        componentDidMount() {
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
            });

            map.on('move', () => {
                this.setState({
                    lng: map.getCenter().lng.toFixed(4) as unknown as number,
                    lat: map.getCenter().lat.toFixed(4) as unknown as number,
                    zoom: map.getZoom().toFixed(2) as unknown as number
                });
            });
            console.log("About to add markers");
            this.addMarkers();
        }

        render() {
            return (
                <div>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                    <div id="map" />
                </div>
            )
        }

        addMarkers() {
            if (map != null) {
                geojson.features.forEach(function (marker) {
                    console.log("adding markers in for each");
                    // create a DOM element for the marker
                    var el = document.createElement('div');
                    el.className = 'marker';
                    // el.style.backgroundImage =
                    // marker.properties.iconSize.join('/') +
                    // '/)';
                    el.style.width = '6px';//marker.properties.iconSize[0] + 'px';
                    el.style.height = '6px';//marker.properties.iconSize[1] + 'px';

                    el.addEventListener('click', function () {
                        window.alert(marker.properties.message);
                    });

                    // add marker to map
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates as LngLatLike)
                        .addTo(map);
                });
            }
        }
    }

    return (
        <div className={styles.mapRoot}>
            <ResourceMap />
        </div>
    );
}

// Test data
var geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Foo',
                'iconSize': [60, 60]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.0, 39]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Bar',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.1, 39]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Baz',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.2, 39]
            }
        }
    ]
};
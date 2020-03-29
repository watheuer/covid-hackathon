import React, { FunctionComponent, useState, useRef, useEffect } from "react";
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
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const mapContainer = useRef<HTMLDivElement | null>(null);

    // Init map effect (only runs on init)
    useEffect(() => {
        const initializeMap = () => {
            const map = new mapboxgl.Map({
                container: mapContainer.current!,
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: [-77, 39],
                zoom: 8
            });

            map.on('load', () => {
                setMap(map);
                map.resize();
            });

            // TODO: reintroduce marker logic
            // console.log("adding markers in for each");
            // // create a DOM element for the marker
            // var el = document.createElement('div');
            // el.className = 'marker';
            // // el.style.backgroundImage =
            // // marker.properties.iconSize.join('/') +
            // // '/)';
            // el.style.width = '6px';//marker.properties.iconSize[0] + 'px';
            // el.style.height = '6px';//marker.properties.iconSize[1] + 'px';

            // el.addEventListener('click', function () {
            //     window.alert(marker.properties.message);
            // });

            // // add marker to map
            // new mapboxgl.Marker(el)
            //     .setLngLat(marker.geometry.coordinates as LngLatLike)
            //     .addTo(map);
        };

        if (!map) initializeMap();
    }, [map, setMap, mapContainer]);

    // Resize window effect
    useEffect(() => {
        const listener = (e: UIEvent) => map!.resize();
        window.addEventListener('resize', listener);

        // Cleanup function
        return () => window.removeEventListener('resize', listener);
    }, [map]);

    return (
        <div className={styles.mapRoot} ref={mapContainer}></div>
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
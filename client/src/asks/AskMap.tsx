import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { AskListProps } from "./AskList";
import styles from './Asks.module.scss';
import Geocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN as string;
type AppProps = {}

let centerDefaultCoordinates: LngLatLike = [-77, 39];

export const AskMap: FunctionComponent<AskListProps> = ({ asks, fetching }) => {
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const mapContainer = useRef<HTMLDivElement | null>(null);

    // Init map effect (only runs on init)
    useEffect(() => {
        const initializeMap = () => {
            const map = new mapboxgl.Map({
                container: mapContainer.current!,
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: centerDefaultCoordinates,
                zoom: 8
            });
            setMap(map);
            map.resize();

            asks.forEach(function (ask) {
                let lngLat: LngLatLike;
                let location = ask.location;
                let address: string = location.street_address + " " + location.city + ", " +
                    location.state + " " + location.zip;
                Geocoding({ accessToken: mapboxgl.accessToken })
                    .forwardGeocode({
                        query: address,
                        mode: "mapbox.places",
                        proximity: centerDefaultCoordinates as number[],
                        autocomplete: false,
                        limit: 1
                    })
                    .send()
                    .then(function (response) {
                        if (
                            response &&
                            response.body &&
                            response.body.features &&
                            response.body.features.length) {
                            var feature = response.body.features[0];

                            lngLat = feature.center;
                            let popupHtml: string = `<strong>${ask.requester}</strong><p>Item: ${ask.item}<p>Address: ${address}<p>` +
                                `Email: ${ask.email}<p>Phone: ${ask.phone}<p>Instructions: ${ask.instructions}`;

                            // create a HTML element for each feature
                            var mapMarker = document.createElement('div');
                            mapMarker.className = styles.mapMarker;

                            let popup: mapboxgl.Popup = new mapboxgl.Popup()
                                .setLngLat(lngLat)
                                .setHTML(popupHtml)
                                .addTo(map);

                            new mapboxgl.Marker(mapMarker)
                                .setLngLat(lngLat)
                                .setPopup(popup)
                                .addTo(map);
                        }
                    });
            });
        };

        if (!map) initializeMap();
    }, [map, setMap, mapContainer]);

    // Resize window effect
    useEffect(() => {
        const listener = (e: UIEvent) => {
            if (map) map.resize();
        }
        window.addEventListener('resize', listener);

        // Cleanup function
        return () => window.removeEventListener('resize', listener);
    }, [map]);

    return (
        <div className={styles.mapRoot} ref={mapContainer}></div>
    );
}
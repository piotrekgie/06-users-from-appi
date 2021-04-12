import React from "react";
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon;

function UserMap({coordinates}) {
    return (
        <MapContainer
            className="user-map"
            center={[coordinates.latitude, coordinates.longitude]}
            zoom={3}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
                position={[coordinates.latitude, coordinates.longitude]}
            />
        </MapContainer>
    );
}

export default UserMap;
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import { HeaderHeight } from '../variables/variables';
import Popup from '../components/Popup';
import { HashRouter, Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore/lite';
import { db } from '../firebase';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { isAuthorized } from '../helpers/auth';

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3NrYXItYWdhIiwiYSI6ImNsMmF2aDlkdDA3NzIza25yZTB6cGlsY3gifQ.Ma1eN-_aYN5AHkewOnTR5A';

const Projects = () => {
  const { t, i18n } = useTranslation();

  const isAuthorize = isAuthorized();
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(66.9237);
  const [lat, setLat] = useState(48.0196);
  const [zoom, setZoom] = useState(4);

  useEffect(async () => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    const markers = await getMarkers();
    markers.forEach((marker) => {
      const popupNode = document.createElement('div');
      ReactDOM.render(
        <HashRouter>
          <Popup
            isAuthorized={isAuthorize}
            marker={marker}
            language={i18n.language}
            handleDeleteMarker={handleDeleteMarker}
          />
        </HashRouter>,
        popupNode,
      );

      new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .setPopup(
          new mapboxgl.Popup({ className: 'custom-popup', maxWidth: '300px' }).setDOMContent(
            popupNode,
          ),
        )
        .addTo(map.current);
    });
  }, []);

  const handleDeleteMarker = async (name) => {
    console.log('delete', name);
    await deleteDoc(doc(db, 'markers', name));
    window.location.reload();
  };

  const getMarkers = async () => {
    const q = query(collection(db, 'markers'));
    const querySnapshot = await getDocs(q);

    const markers = querySnapshot.docs.map((doc) => doc.data());
    return markers;
  };

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '32px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          Проекты
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container sx={{ position: 'relative', paddingBottom: '32px' }}>
        <div style={{ height: '520px', width: '100%' }} className="pb-8">
          <div ref={mapContainer} className="map-container" style={{ height: '100%' }} />
        </div>
        {isAuthorize && (
          <div className="flex justify-end">
            <Button>
              <Link to="/create-marker">Добавить метку</Link>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Projects;

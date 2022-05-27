import { doc, getDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { HeaderHeight } from '../variables/variables';
import CreateMarker from './CreateMarker';

const EditMarker = () => {
  const navigate = useNavigate();

  const markerId = useParams().markerId;

  const [marker, setMarker] = useState(null);

  useEffect(async () => {
    const markerRef = doc(db, 'markers', markerId);
    const markerSnap = await getDoc(markerRef);
    if (markerSnap.exists()) {
      const markerData = markerSnap.data();
      console.log({ markerData });
      setMarker(markerData);
      console.log({ markerData });
    } else {
      navigate('/not-found');
    }
  }, []);

  const getFormattedText = (items) => {
    return items.map((item) => `${item.text}**${item.link}`).join('\n');
  };

  if (!marker) {
    return (
      <div
        style={{
          paddingTop: `${HeaderHeight}px`,
        }}>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <CreateMarker
        initialName={marker.name}
        initialLng={marker.coordinates[0]}
        initialLat={marker.coordinates[1]}
        initialSolutionRu={`${marker.solution_ru.text}**${marker.solution_ru.link}`}
        initialSolutionKz={`${marker.solution_kz.text}**${marker.solution_kz.link}`}
        initialEquipmentsRu={getFormattedText(marker.equipments_ru)}
        initialEquipmentsKz={getFormattedText(marker.equipments_kz)}
      />
    </div>
  );
};

export default EditMarker;

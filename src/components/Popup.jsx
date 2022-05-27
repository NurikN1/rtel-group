import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Popup = ({ marker, language, isAuthorized, handleDeleteMarker }) => {
  return (
    <div>
      <h4 className="text-base text-gray-800">Использованные оборудования:</h4>
      <ul>
        {marker[`equipments_${language}`].map((equipment) => (
          <li key={equipment.text}>
            <Link
              to={equipment.link}
              className="text-blue-800 hover:underline outline-none"
              target="_blank">
              {equipment.text}
            </Link>
          </li>
        ))}
      </ul>
      <h4 className="text-base text-gray-800">Решения:</h4>
      <Link
        to={marker[`solution_${language}`].link}
        className="text-blue-800 hover:underline outline-none"
        target="_blank">
        {marker[`solution_${language}`].text}
      </Link>
      {isAuthorized && (
        <div className="flex justify-end space-x-2">
          <Link to={`/edit-marker/${marker.name}`} target="_blank">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            color="error"
            aria-label="upload picture"
            component="span"
            onClick={() => handleDeleteMarker(marker.name)}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Popup;

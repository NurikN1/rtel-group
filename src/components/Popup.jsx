import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';

const Popup = ({ marker, language, isAuthorized, handleDeleteMarker }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h4 className="text-base text-gray-800">{t('projects.equipments')}:</h4>
      <ul>
        {marker[`equipments_${language}`].map((equipment) => (
          <li key={equipment.text}>
            <a
              href={equipment.link}
              className="text-blue-800 hover:underline outline-none"
              target="_blank"
              rel="noreferrer">
              {equipment.text}
            </a>
          </li>
        ))}
      </ul>
      <h4 className="text-base text-gray-800">{t('projects.solutions')}:</h4>
      <a
        href={marker[`solution_${language}`].link}
        className="text-blue-800 hover:underline outline-none"
        target="_blank"
        rel="noreferrer">
        {marker[`solution_${language}`].text}
      </a>
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

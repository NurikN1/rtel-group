import { useState } from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem } from '@mui/material';
import { ReactComponent as RuIcon } from '../assets/icons/ru.svg';
import { ReactComponent as KzIcon } from '../assets/icons/kz.svg';

const LanguageMenu = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (language) => {
    localStorage.setItem('activeLanguage', language);
    window.location.reload();
    setActiveLanguage(language);
    changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          padding: 0,
          color: 'white',
          fontWeight: 'normal',
        }}>
        {activeLanguage === 'ru' ? (
          <div className="flex items-center">
            Rus <RuIcon className="h-4 w-4 ml-2" />
          </div>
        ) : (
          <div className="flex items-center">
            Kaz <KzIcon className="h-4 w-4 ml-2" />
          </div>
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={() => handleClose('kz')}>
          Kaz <KzIcon className="h-4 w-4 ml-2" />
        </MenuItem>
        <MenuItem onClick={() => handleClose('ru')}>
          Rus <RuIcon className="h-4 w-4 ml-2" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageMenu;

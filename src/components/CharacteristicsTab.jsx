import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditProductDialog from './EditProductDialog';

const CharacteristicsTab = ({
  characteristics,
  handleAddCharacteristic,
  handleRemoveCharacteristic,
  handleEditCharacteristic,
}) => {
  const { t } = useTranslation();

  const maxId = Math.max(...characteristics.map((c) => c.id)) | 0;

  const [nameKz, setNameKz] = useState('');
  const [nameRu, setNameRu] = useState('');
  const [characteristicsKz, setCharacteristicsKz] = useState('');
  const [characteristicsRu, setCharacteristicsRu] = useState('');

  const [characteristicToEdit, setCharacteristicToEdit] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setCharacteristicToEdit(characteristics.find((item) => item.id === id));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getMappedRows = (rows) => {
    return rows
      .trim()
      .split('\n')
      .map((row) => {
        const [key, value] = row.split('**');
        return { key, value };
      });
  };

  const resetValues = () => {
    setNameKz('');
    setNameRu('');
    setCharacteristicsKz('');
    setCharacteristicsRu('');
  };

  const addCharacteristic = () => {
    const rowsKz = getMappedRows(characteristicsKz);
    const rowsRu = getMappedRows(characteristicsRu);

    const characteristic = {
      id: maxId + 1,
      name_ru: nameRu,
      name_kz: nameKz,
      rows_ru: rowsRu,
      rows_kz: rowsKz,
    };

    handleAddCharacteristic(characteristic);
    console.log({ characteristic, characteristics });
    resetValues();
  };

  const removeCharacteristic = (id) => {
    handleRemoveCharacteristic(id);
    console.log({ id });
    console.log({ characteristics });
  };

  const editCharacteristic = (characteristic) => {
    handleEditCharacteristic(characteristic);
  };

  return (
    <div className="mb-4">
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        {t('createProduct.characteristics')}
      </Typography>
      <div className="flex space-x-4">
        <TextField
          sx={{ marginBottom: '8px' }}
          fullWidth
          label={`${t('createProduct.name')}(рус)`}
          value={nameRu}
          onChange={(e) => setNameRu(e.target.value)}
        />
        <TextField
          sx={{ marginBottom: '8px' }}
          fullWidth
          label={`${t('createProduct.name')}(қаз)`}
          value={nameKz}
          onChange={(e) => setNameKz(e.target.value)}
        />
      </div>

      <div className="flex space-x-4">
        <TextareaAutosize
          className="p-2 mb-4 w-full border border-gray-300 rounded-lg text-sm"
          aria-label="minimum height"
          minRows={4}
          maxRows={8}
          placeholder={`${t('createProduct.characteristics')}(рус)`}
          style={{ width: '100%' }}
          value={characteristicsRu}
          onChange={(e) => setCharacteristicsRu(e.target.value)}
        />
        <TextareaAutosize
          className="p-2 mb-4 w-full border border-gray-300 rounded-lg text-sm"
          aria-label="minimum height"
          minRows={4}
          maxRows={8}
          placeholder={`${t('createProduct.characteristics')}(қаз)`}
          style={{ width: '100%' }}
          value={characteristicsKz}
          onChange={(e) => setCharacteristicsKz(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button
          variant="contained"
          sx={{
            height: '36px',
          }}
          color="primary"
          onClick={addCharacteristic}>
          {t('createProduct.addCharacteristic')}
        </Button>
      </div>
      <Divider sx={{ marginY: '16px' }} />
      <ul>
        {characteristics.map((item, i) => (
          <li key={item.id}>
            <Typography variant="h6">
              {item.name_ru} - {item.name_kz}
            </Typography>
            <div className="flex space-x-4 mb-4">
              <ul>
                {item.rows_ru.map((row, i) => (
                  <li key={i}>
                    {row.key} - {row.value}
                  </li>
                ))}
              </ul>
              <ul>
                {item.rows_kz.map((row, i) => (
                  <li key={i}>
                    {row.key} - {row.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="contained"
                color="error"
                onClick={() => removeCharacteristic(item.id)}>
                {t('actions.remove')}
              </Button>
              <Button variant="contained" color="primary" onClick={() => handleOpen(item.id)}>
                {t('actions.edit')}
              </Button>
            </div>
            <Divider sx={{ marginY: '8px' }} />
          </li>
        ))}
      </ul>
      <EditProductDialog
        open={open}
        characteristic={characteristicToEdit}
        handleClose={handleClose}
        handleEdit={editCharacteristic}
      />
    </div>
  );
};

export default CharacteristicsTab;

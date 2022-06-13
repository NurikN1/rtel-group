import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getMappedRows } from '../helpers/mapping';

const EditProductDialog = ({ open, handleClose, characteristic, handleEdit }) => {
  if (!characteristic) {
    return <div></div>;
  }
  const { t } = useTranslation();

  const getCharacteristicText = (rows) => {
    return rows.map((row) => `${row.key}**${row.value}`).join('\n');
  };

  const [nameKz, setNameKz] = useState(characteristic.name_kz);
  const [nameRu, setNameRu] = useState(characteristic.name_ru);
  const [characteristicsKz, setCharacteristicsKz] = useState(
    getCharacteristicText(characteristic.rows_kz),
  );
  const [characteristicsRu, setCharacteristicsRu] = useState(
    getCharacteristicText(characteristic.rows_ru),
  );

  useEffect(() => {
    setNameKz(characteristic.name_kz);
    setNameRu(characteristic.name_ru);
    setCharacteristicsKz(getCharacteristicText(characteristic.rows_kz));
    setCharacteristicsRu(getCharacteristicText(characteristic.rows_ru));
  }, [characteristic]);

  const edit = () => {
    const rowsKz = getMappedRows(characteristicsKz);
    const rowsRu = getMappedRows(characteristicsRu);

    const editedCharacteristic = {
      id: characteristic.id,
      name_ru: nameRu,
      name_kz: nameKz,
      rows_ru: rowsRu,
      rows_kz: rowsKz,
    };
    handleEdit(editedCharacteristic);
    handleClose();
  };

  return (
    <Dialog open={open} fullWidth={true} maxWidth="md">
      <DialogTitle>{t('editForm.title')}</DialogTitle>
      <DialogContent>
        <div className="flex space-x-4 py-8">
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('actions.cancel')}</Button>
        <Button onClick={edit}>{t('actions.edit')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductDialog;

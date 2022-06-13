import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { db } from '../firebase';
import { HeaderHeight } from '../variables/variables';

const CreateMarker = ({
  initialName = '',
  initialLng = '',
  initialLat = '',
  initialSolutionRu = '',
  initialSolutionKz = '',
  initialEquipmentsRu = '',
  initialEquipmentsKz = '',
}) => {
  const { t } = useTranslation();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: initialName,
      lng: initialLng,
      lat: initialLat,
      solutionRu: initialSolutionRu,
      solutionKz: initialSolutionKz,
      equipmentsRu: initialEquipmentsRu,
      equipmentsKz: initialEquipmentsKz,
    },
  });
  const form = useRef();

  const onSubmit = async (data) => {
    const marker = createMarker(data);
    const markers = collection(db, 'markers');

    await setDoc(doc(markers, marker.name), marker);

    reset({
      name: '',
      lng: '',
      lat: '',
      solutionRu: '',
      solutionKz: '',
      equipmentsRu: '',
      equipmentsKz: '',
    });
  };

  const getSplittedByNewLine = (text) => {
    return text.trim().split('\n');
  };

  const getSplittedByStars = (text) => {
    return text.trim().split('**');
  };

  const getEquipments = (data) => {
    return getSplittedByNewLine(data).map((eq) => {
      console.log({ eq });
      const [text, link] = getSplittedByStars(eq);
      return { text, link };
    });
  };

  const createMarker = (data) => {
    const [solutionRu, linkRu] = getSplittedByStars(data.solutionRu);
    const [solutionKz, linkKz] = getSplittedByStars(data.solutionKz);

    const equipmentsRu = getEquipments(data.equipmentsRu);
    const equipmentsKz = getEquipments(data.equipmentsKz);

    return {
      name: data.name,
      coordinates: [+data.lng, +data.lat],
      solution_ru: {
        text: solutionRu,
        link: linkRu,
      },
      solution_kz: {
        text: solutionKz,
        link: linkKz,
      },
      equipments_ru: equipmentsRu,
      equipments_kz: equipmentsKz,
    };
  };

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <div className="mt-8">
        <Container maxWidth="md" sx={{ marginY: '16px' }}>
          <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
            {t('projects.editMarker.title')}
          </Typography>
        </Container>
        <Container maxWidth="md">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
                {t('projects.editMarker.name')}:
              </Typography>
              <TextField
                {...register('name')}
                fullWidth
                label={t('projects.editMarker.name')}
                id="lng"
              />
            </div>
            <div className="mb-4">
              <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
                {t('projects.editMarker.coordinates')}:
              </Typography>
              <div className="flex space-x-4">
                <TextField
                  {...register('lng')}
                  fullWidth
                  label={t('projects.editMarker.longitude')}
                  id="lng"
                />
                <TextField
                  {...register('lat')}
                  fullWidth
                  label={t('projects.editMarker.latitude')}
                  id="lat"
                />
              </div>
            </div>
            <div className="mb-4">
              <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
                {t('projects.solutions')}:
              </Typography>

              <div className="flex space-x-4">
                <TextField
                  {...register('solutionRu')}
                  fullWidth
                  label={`${t('projects.solutions')}(рус)`}
                  id="firstName"
                />
                <TextField
                  {...register('solutionKz')}
                  fullWidth
                  label={`${t('projects.solutions')}(қаз)`}
                  id="firstName"
                />
              </div>
            </div>
            <div className="mb-4">
              <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
                {t('projects.equipments')}:
              </Typography>

              <div className="flex space-x-4">
                <TextareaAutosize
                  {...register('equipmentsRu')}
                  className="p-2 w-full border border-gray-300 rounded-lg"
                  aria-label="minimum height"
                  minRows={2}
                  placeholder={`${t('projects.equipments')}(рус)`}
                  style={{ width: '100%' }}
                />
                <TextareaAutosize
                  {...register('equipmentsKz')}
                  className="p-2 w-full border border-gray-300 rounded-lg"
                  aria-label="minimum height"
                  minRows={2}
                  placeholder={`${t('projects.equipments')}(қаз)`}
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  backgroundColor: '#1f2937',
                  '&:hover': {
                    backgroundColor: '#1f2937',
                    opacity: 0.9,
                  },
                }}>
                {t('projects.editMarker.submit')}
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default CreateMarker;

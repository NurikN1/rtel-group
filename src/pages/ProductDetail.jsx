import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { isAuthorized } from '../helpers/auth';
import { HeaderHeight } from '../variables/variables';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const categoryId = useParams().categoryId;
  const productId = useParams().productId;

  const [product, setProduct] = useState(null);

  useEffect(async () => {
    const categoryRef = doc(db, 'categories', categoryId);
    const categorySnap = await getDoc(categoryRef);
    if (categorySnap.exists()) {
      const category = categorySnap.data();
      const product = category.products.find((product) => product.id === productId);
      if (!product) {
        navigate('/not-found');
      }
      setProduct(product);
    } else {
      navigate('/not-found');
    }
  }, []);

  const removeProduct = async () => {
    const categories = collection(db, 'categories');
    const categoryRef = doc(db, 'categories', categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (categorySnap.exists()) {
      const category = categorySnap.data();
      const newProducts = category.products.filter((p) => p.id !== productId);

      await setDoc(doc(categories, categoryId), {
        ...category,
        products: [...newProducts],
      });
      navigate('/');
      console.log('Document data:', category);
    } else {
      console.log('No such document!');
    }
  };

  if (!product) {
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
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '48px',
        }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: '16px' }}
          className="text-gray-600">
          {product.name}
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <div className="bg-gray-100 py-8">
        <Container maxWidth="lg">
          <div className="flex space-x-8">
            <div className="flex-1 flex justify-center items-center">
              <img src={product.featureImg} alt="Image" />
            </div>
            <div className="flex-1">
              <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
                {t('product.description')}
              </Typography>
              <Divider sx={{ marginBottom: '16px' }} />
              <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
                {product.description[`name_${i18n.language}`]}
              </Typography>
              <ul className="list-disc pl-4">
                {product.description[`rows_${i18n.language}`].map((row, i) => (
                  <li key={i}>{row}</li>
                ))}
                {/* <li>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    {product.description[`body_${i18n.language}`]}
                  </Typography>
                </li> */}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-8">
        <Container maxWidth="lg">
          <div className="flex space-x-8">
            <div className="flex-1">
              <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
                {t('product.features')}
              </Typography>
              <Divider sx={{ marginBottom: '16px' }} />
              <ul className="list-disc pl-4">
                {product.feature[`rows_${i18n.language}`].map((row, i) => (
                  <li key={i}>
                    <Typography variant="body2" className="text-gray-600">
                      {row}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
                {t('product.characteristics')}
              </Typography>
              <Divider sx={{ marginBottom: '16px' }} />
              <div>
                {product.characteristics.map((item) => (
                  <div key={item.id}>
                    <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
                      {item[`name_${i18n.language}`]}
                    </Typography>
                    <ul>
                      {item[`rows_${i18n.language}`].map((row, i) => (
                        <li key={i} className="mb-1">
                          <div className="flex space-x-4 mb-1">
                            <div style={{ minWidth: '40%', maxWidth: '40%' }}>
                              <Typography variant="body2" className="text-gray-600">
                                {row.key}
                              </Typography>
                            </div>
                            <div>
                              <Typography variant="body2" className="text-gray-600">
                                {row.value}
                              </Typography>
                            </div>
                          </div>
                          <Divider />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {isAuthorized() && (
        <Container
          maxWidth="lg"
          sx={{
            paddingY: '24px',
          }}>
          <div className="px-4 flex justify-end space-x-8">
            <Button variant="contained" color="success">
              <Link to={`/edit/${categoryId}/${productId}`}>Редактировать</Link>
            </Button>
            <Button variant="contained" color="error" onClick={removeProduct}>
              Удалить
            </Button>
          </div>
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;

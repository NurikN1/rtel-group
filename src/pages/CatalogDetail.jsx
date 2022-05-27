import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { db } from '../firebase';
import { isAuthorized } from '../helpers/auth';
import { HeaderHeight } from '../variables/variables';

const CATEGORIES = [
  {
    name: 'TETRA системы',
    value: 'tetra-systems',
  },
  {
    name: 'Система двунаправленных усилителей радиосигнала BDA',
    value: 'bda-systems',
  },
  {
    name: 'TETRA терминалы',
    value: 'tetra-terminals',
  },
  {
    name: 'Системы PoC',
    value: 'poc-systems',
  },
  {
    name: 'Терминалы РоС',
    value: 'poc-terminals',
  },
];

const CatalogDetail = () => {
  const categoryName = useParams().categoryName;
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();

  const isAuthorize = isAuthorized();

  useEffect(async () => {
    // const categories = collection(db, 'categories');

    // await setDoc(doc(categories, 'tetra-systems'), CATEGORIES[0]);
    const categoryRef = doc(db, 'categories', categoryName);
    const categorySnap = await getDoc(categoryRef);
    if (categorySnap.exists()) {
      const category = categorySnap.data();
      setProducts(category.products);
      console.log('Document data:', categorySnap.data());
    } else {
      console.log('No such document!');
    }
  }, []);
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '48px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          TETRA СИСТЕМЫ
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <div className=" bg-gray-100">
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            paddingY: '32px',
          }}>
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                linkTo={product.id}
                img={product.img}
                title={product.name}
                subtitle={product[`subtitle_${i18n.language}`]}
              />
            ))}
        </Container>
        {isAuthorize && (
          <Container
            maxWidth="xl"
            sx={{
              paddingY: '24px',
            }}>
            <div className="px-4">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1f2937',
                  '&:hover': {
                    backgroundColor: '#1f2937',
                    opacity: 0.9,
                  },
                }}>
                <Link to="/create">Добавить новый</Link>
              </Button>
            </div>
          </Container>
        )}
      </div>
    </div>
  );
};

export default CatalogDetail;

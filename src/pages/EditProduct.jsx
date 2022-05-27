import { doc, getDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { HeaderHeight } from '../variables/variables';
import CreateProduct from './CreateProduct';

const EditProduct = () => {
  const navigate = useNavigate();

  const categoryId = useParams().categoryId;
  const productId = useParams().productId;

  const [product, setProduct] = useState(null);

  const getJoinedByNewLine = (items) => {
    return items.join('\n');
  };

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
      console.log({ product });
    } else {
      navigate('/not-found');
    }
  }, []);

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
    <div>
      <CreateProduct
        initialId={productId}
        initialCategoryName={categoryId}
        initialName={product.name}
        initialSubtitleKz={product.subtitle_kz}
        initialSubtitleRu={product.subtitle_ru}
        initialImg={product.img}
        initialFeatureImg={product.featureImg}
        initialDescriptionNameRu={product.description.name_ru}
        initialDescriptionNameKz={product.description.name_kz}
        initialDescriptionRu={getJoinedByNewLine(product.description.rows_ru)}
        initialDescriptionKz={getJoinedByNewLine(product.description.rows_kz)}
        initialFeaturesKz={getJoinedByNewLine(product.feature.rows_kz)}
        initialFeaturesRu={getJoinedByNewLine(product.feature.rows_ru)}
        initialCharacteristics={product.characteristics}
      />
    </div>
  );
};

export default EditProduct;

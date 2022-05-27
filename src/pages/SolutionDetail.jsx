import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SOLUTIONS } from '../mock/solutions';

const SolutionDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const solution = SOLUTIONS.find((solution) => solution.name === params.solutionName);

  useEffect(() => {
    if (!solution) {
      navigate('/');
    }
  }, [params]);

  if (!solution) {
    return null;
  }

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://www.hytera.ru/upload/resize_cache/webp/iblock/76d/76db6bbf5dfba0d15776dbaa0e8ce5a1.webp")',
        }}>
        <Typography variant="h3" className="text-white" sx={{ marginBottom: '16px' }}>
          {solution.title}
        </Typography>
        <a
          className="py-2 px-6 text-lg text-white bg-gray-800 rounded-lg cursor-pointer"
          href={solution.filePath}
          download
          target="_blank"
          rel="noreferrer">
          Скачать презентацию
        </a>
      </div>
    </div>
  );
};

export default SolutionDetail;

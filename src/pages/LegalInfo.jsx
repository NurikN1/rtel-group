import { Divider, Typography } from '@mui/material';
import { HeaderHeight } from '../variables/variables';

const LegalInfo = () => {
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <div className="container mx-auto py-12">
        <div className="mb-6">
          <Typography variant="h4" align="center">
            ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ
          </Typography>
          <Divider />
        </div>
        <div className="mb-6">
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            ТОО «RTel Group»
          </Typography>
          <ul>
            <li>
              Юридический и фактический адрес: Казахстан, город Алматы, пр. Гагарина 236, офис 333.
            </li>
            <li>БИН: 190540023767</li>
            <li>61209 – ОКЭД. Прочая беспроводная телекоммуникационная связь</li>
          </ul>
        </div>
        <div className="mb-6">
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            В Филиале АО «Forte Bank» в г. Алматы, БИК IRTYKZKA, KZ1496502F0011231710 В г. Алматы,
            пр. Нурсултан Назарбаев, д 100. (основной счет)
          </Typography>
          <ul>
            <li>Свидетельство о постановке на НДС серия 60001 №1221992от 25.06.2021г.</li>
            <li>Директор: Молдасанов Едиль Серикбекович, действующий на основании Устава</li>
            <li className=" font-bold">Почта: YM@rtel.kz</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;

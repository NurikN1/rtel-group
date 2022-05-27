import { Divider, Typography } from '@mui/material';
import { HeaderHeight } from '../variables/variables';

const HyteraHytalk = () => {
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <div className="container mx-auto">
        <div className="py-16">
          <Typography variant="h4" align="center" color="#707070" sx={{ marginBottom: '48px' }}>
            Что такое Hytera Hytalk?
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="#707070"
            sx={{ marginBottom: '48px', maxWidth: '730px', marginX: 'auto' }}>
            Решение Hytera HyTalk PoC основывается на существующих сетях 3G/LTE/WLAN и предоставляет
            такие сервисы как Push-to-Talk, видеозвонки, обмен мультимедийными сообщениями, функции
            диспетчеризации и многое другое.
          </Typography>
          <div className="flex justify-between">
            <div className="flex flex-col items-center max-w-[340px]">
              <img
                className="w-[45px] h-[45px] mb-2"
                src="https://www.hytera.ru/poc/Hytalk/img/icon1.png"
                alt="img"
              />
              <Typography variant="h6" sx={{ marginBottom: '8px' }} color="#727272">
                Покрытие по всему миру
              </Typography>
              <Typography variant="body2" align="center" color="#707070">
                PoC использует сети 3G / LTE и WLAN, чтобы обеспечить безопасное, мгновенное и
                глобальное коммуникационное решение для современных мобильных сотрудников.
              </Typography>
            </div>
            <div className="flex flex-col items-center max-w-[340px]">
              <img
                className="w-[45px] h-[45px] mb-2"
                src="https://www.hytera.ru/poc/Hytalk/img/icon2.png"
                alt="img"
              />
              <Typography variant="h6" sx={{ marginBottom: '8px' }} color="#727272">
                Инфраструктура не требуется
              </Typography>
              <Typography variant="body2" align="center" color="#707070">
                Клиенту больше не нужно покупать, эксплуатировать и обслуживать какую-либо
                инфраструктуру, поскольку все это делают операторы мобильной сети.Необходимо
                использовать сим-карту операторов мобильной связи.
              </Typography>
            </div>
            <div className="flex flex-col items-center max-w-[340px]">
              <img
                className="w-[45px] h-[45px] mb-2"
                src="https://www.hytera.ru/poc/Hytalk/img/icon3.png"
                alt="img"
              />
              <Typography variant="h6" sx={{ marginBottom: '8px' }} color="#727272">
                Экономически эффективно
              </Typography>
              <Typography variant="body2" align="center" color="#707070">
                PoC можно развернуть из бюджета операционных расходов (OPEX), как недорогую услугу
                на основе подписки.
              </Typography>
            </div>
          </div>
        </div>
        <div className="py-16">
          <Typography variant="h4" align="center" color="#707070" sx={{ marginBottom: '48px' }}>
            Тарифы Hytera PoC
          </Typography>
          <div>
            <Typography variant="h6" color="#727272" sx={{ marginBottom: '16px' }}>
              Терминалы
            </Typography>
            <Divider />
            <div className="flex justify-between py-8">
              <div>
                <img
                  className="w-[144px] mb-2"
                  src="https://www.hytera.ru/poc/Hytalk/img/img3.png"
                  alt="img"
                />
              </div>
              <div className="w-[80%]">
                <ul>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Аудио
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Регистрация и аутентификация, индивидуальные и групповые аудио вызовы,
                        дуплексные и полудуплексные вызовы, передача коротких и статусных
                        мультимедиа сообщений, отправка координат, экстренные вызовы,
                        конференц-вызовы, динамические группы, запросы/очереди/прерывание
                        транзакций.
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Аудио и Видео
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Все услуги аудио + видео групповые/индивидуальные вызовы, видео по запросу,
                        трансляция видео
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6" color="#727272" sx={{ marginBottom: '16px' }}>
              Диспетчер
            </Typography>
            <Divider />
            <div className="flex justify-between py-8">
              <div>
                <img
                  className="w-[144px] mb-2"
                  src="https://www.hytera.ru/poc/Hytalk/img/img5.png"
                  alt="img"
                />
              </div>
              <div className="w-[80%]">
                <ul>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Базовый
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Aудио вызовы, прослушивание переговоров, передача сообщений, проигрывание
                        записанных данных
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Улучшенный
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Базовые услуги + позиционирование на карте, просмотр истории перемещений,
                        геофенсинг
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Видео
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Видеовызовы, трансляция видео в реальном времени, получение видеопотоков от
                        пользователей. + Улучшенный
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6" color="#727272" sx={{ marginBottom: '16px' }}>
              Администрирование
            </Typography>
            <Divider />
            <div className="flex justify-between py-8">
              <div>
                <img
                  className="w-[144px] mb-2"
                  src="https://www.hytera.ru/poc/Hytalk/img/img4.png"
                  alt="img"
                />
              </div>
              <div className="w-[80%]">
                <ul>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Управление
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Создание\редактирование\удаление абонентов, групп, суборганизаций; просмотр
                        статистики по вызовам, по квотам.
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Запись
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Запись\прослушивание\просматривание\экспортирование переговров и
                        видеотрансляций, хранение аудио и видео данных, резервирование
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                  <li>
                    <div className="flex items-center py-4">
                      <Typography variant="subtitle2" color="#727272" className="min-w-[192px]">
                        Техподдержка
                      </Typography>
                      <Typography variant="body2" color="#707070">
                        Решение технических проблем 8/5 с помощью портала support.hytera.ru, помощь
                        в настройке системы, регулярные обновления
                      </Typography>
                    </div>
                    <Divider />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyteraHytalk;

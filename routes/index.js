import home from './frontEnd/home';
import products from './frontEnd/products';
import solution from './frontEnd/solution';
import news from './frontEnd/news';
import joinUs from './frontEnd/joinUs';
import contactUs from './frontEnd/contactUs';
import jobs from './frontEnd/jobs';
import articleDetail from './frontEnd/articleDetail';

//require backend page routes
import login from './backEnd/login';
import dashboard from './backEnd/dashboard';
import addArticle from './backEnd/addArticle';
import articleList from './backEnd/articleList';
import articleEditer from './backEnd/articleEditer';
import partners from './backEnd/partners';
import metas from './backEnd/metas';

//require api routes
import userApi from './API/user';
import articleApi from './API/article';
import partnersApi from './API/partners';
import cooperationsApi from './API/cooperations';
// import uploadApi from './API/upload';
// import tokenApi from './API/token';

const routes = function (app) {

  //apis
  const api = '/api';
  app.use(api, userApi);
  app.use(api, articleApi);
  app.use(api, partnersApi);
  app.use(api, cooperationsApi);
  // app.use(api, uploadApi);
  // app.use(api, tokenApi);

  // frontend page routers
  app.use('/', home);
  app.use('/home', home);
  app.use('/products', products);
  app.use('/solution', solution);
  app.use('/news', news);
  app.use('/joinUs', joinUs);
  app.use('/contactUs', contactUs);
  app.use('/jobs', jobs);
  app.use('/articleDetail', articleDetail);

  //backend page routers
  const bPath = '/backend';
  app.use(`${bPath}/login`, login);
  app.use(`${bPath}/dashboard`, dashboard);
  app.use(`${bPath}/addArticle`, addArticle);
  app.use(`${bPath}/articleList`, articleList);
  app.use(`${bPath}/articleEditer`, articleEditer);
  app.use(`${bPath}/partners`, partners);
  app.use(`${bPath}/metas`, metas);

}

export default routes;
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

const isLoggedIn = (res, req, next) => {
  console.log('Loged In');
  next();
};

app.get('/product', (req, res) => {
  res.status(200).send({ message: 'GET product information' });
});

app.get('/user', isLoggedIn, (req, res) => {
  res.status(200).send({ message: 'User profile is returned' });
});

app.listen(5000, () => {
  console.log(`server is running at http://localhost:5000`);
}); 

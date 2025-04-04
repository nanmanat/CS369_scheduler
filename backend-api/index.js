import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swaggerConfig.js';
import helloRoutes from './routes/hello.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', helloRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Docs at http://localhost:${PORT}/api-docs`);
});

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = Fastify()

app.register(cors, {
    origin: 'http://localhost:5173'
});

app.register(appRoutes)

app.listen({
    port: 3333
}).then(() => console.log('HTTP server running!'))
import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'
import { guessRoutes } from './routes/guess'
import { gameRoutes } from './routes/game'
import { authRoutes } from './routes/auth'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  //em produção deve ser uma variável de ambiente
  await fastify.register(jwt, { secret: 'flkbslfjhvbasdlfhb384##24sd' })

  await fastify.register(authRoutes)
  await fastify.register(poolRoutes)
  await fastify.register(userRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(gameRoutes)

  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()

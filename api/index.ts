import { handle } from 'hono/vercel'
import app from '../src/index'

export const config = {
    runtime: 'edge'
}

// Global logger for Vercel logs
app.use('*', async (c, next) => {
    console.log(`[Hono] ${c.req.method} ${c.req.path}`)
    await next()
})

export default handle(app)

import Router from 'vue-router'

import { createRouter as createDefaultRouter } from './defaultRouter'

export function createRouter (ssrContext) {
  const defaultRouter = createDefaultRouter(ssrContext)
  return new Router({
    ...defaultRouter.options,
    routes: (defaultRoutes => {
      return defaultRoutes.map(route => {
        return {
          ...route,
          path: '/some' + route.path
        }
      })
    })(defaultRouter.options.routes)
  })
}

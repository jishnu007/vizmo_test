import { upperFirst, camelCase } from 'lodash'

export default {
  install: (app:any) => {
    // Plugin code goes here
    const components = import.meta.globEager('./*.vue')
    Object.entries(components).forEach(([componentPath, componentConfig]) => {
      const componentName = upperFirst(
        camelCase(componentPath
          .replace(/^\.\//, '')
          .replace(/\.\w+$/, '')
          .replace('index', ''))
      )
      app.component(componentName, componentConfig.default || componentConfig)
    })
  }
}



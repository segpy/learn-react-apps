import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter'
import { giffyRoutes } from './GiffyRoutes/GiffyRoutes'
import Loading from '../components/Loading/Loading'
import { GifContextProvider } from '../context/GifContext'
// import useTitle from '../hooks/useTitle/useTitle'
// import GifContext from '../context/GifContext'

const CustomRouter = () => {
  const APP_ROUTES = [
    ...giffyRoutes
  ]
  // useTitle()

  return (
    <Suspense fallback={<Loading />}>
      <GifContextProvider>
        <Switch>
          {APP_ROUTES.map((route) => (
            <Route key={route.path} path={route.path} component={route.component} />
          ))}
        </Switch>
      </GifContextProvider>

    </Suspense>
  )
}

export default CustomRouter

import { lazy } from 'react'

const Home = lazy(() => import('../../pages/Home/Home'))
const GifsSearch = lazy(() => import('../../pages/GifsHome/GifsHome'))
const GifsDetails = lazy(() => import('../../pages/GifsDetails/GifsDetails'))
const WorkInProgress = lazy(() => import('../../components/InProgress/WorkinProgress'))
const AccordionFAQ = lazy(() => import('../../components/Accordion/AccordionFAQ'))

// function delayForDemo (promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000)
//   }).then(() => promise)
// }

export const giffyRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search/:keyword',
    component: GifsSearch
  },
  {
    path: '/gif/:id',
    component: GifsDetails
  },
  {
    path: '/favorites',
    component: WorkInProgress
  },
  {
    path: '/trending',
    component: WorkInProgress
  },
  {
    path: '/random',
    component: WorkInProgress
  },
  {
    path: '/faq',
    component: AccordionFAQ
  }
]

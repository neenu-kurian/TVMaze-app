import HomePage from '@/components/HomePage'
import NotFoundPage from '@/components/NotFoundPage'
import ShowDetail from '@/components/ShowDetail'

const routes = [
  {
    path: '/',
    component: HomePage,
    redirect: '/show'
  },
  {
    path: '/show',
    component: HomePage
  },
  {
    path: '/show/:id',
    component: ShowDetail
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

export default routes

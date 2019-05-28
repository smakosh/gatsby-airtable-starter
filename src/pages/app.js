import React, { Suspense, useContext, lazy } from "react"
import ScenesProvider from "providers/UserProvider"
import Context from "components/common/Context"
import Layout from "components/common/Layout"
import useFetchUser from "hooks/useFetchUser"
import Spinner from "components/common/Loaders/Spinner"
import Header from "components/theme/Header"

const Authenticated = lazy(() => import("containers/App/Authenticated"))
const Unauthenticated = lazy(() => import("containers/App/Unauthenticated"))

const App = () => {
  const { user, dispatch, logout } = useContext(Context)
  const { loading, isLoggedIn } = useFetchUser(user, dispatch)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : isLoggedIn ? (
        <Suspense fallback={<Spinner />}>
          <Header isLoggedIn={true} logout={logout} />
          <Authenticated />
        </Suspense>
      ) : (
        <Suspense fallback={<Spinner />}>
          <Header />
          <Unauthenticated />
        </Suspense>
      )}
    </>
  )
}

export default () => (
  <ScenesProvider>
    <Layout>
      <App />
    </Layout>
  </ScenesProvider>
)

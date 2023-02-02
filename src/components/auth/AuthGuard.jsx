import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/router"
import { useEffect } from "react"
import GlobalLoader from "../common/GlobalLoader"

export function AuthGuard({ children }) {
  const { user, isLoading, setRedirect } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      //auth is initialized and there is no user
      if (!user) {
        // remember the page that user tried to access
        setRedirect(router.route)
        router.push("/login")
      }
    }
  }, [isLoading, router, user, setRedirect])

  /* show loading indicator while the auth provider is still loading */
  if (isLoading) {
    return <GlobalLoader />
  }

  // if auth initialized with a valid user show protected page
  if (!isLoading && user) {
    return <>{children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}
import {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export const ConditionalRoute = ({children}: PropsWithChildren) => {
    const pathname = usePathname()
    const [display, setDisplay] = useState<boolean>(false)

    useEffect(() => {    
      if (pathname.includes("/login") || pathname.includes("/register") || pathname.includes("/forget-password") || pathname.includes("/verify-account") ) {
        setDisplay(false)
      }else{
        setDisplay(true)
      }
    }, [pathname])
    
  return (
    // display
    <div>{display && children}</div>
  )
}
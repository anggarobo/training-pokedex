import { useEffect } from "react"

export default function useIdulFitri() {




  useEffect(() => {
    if ( date === "1 syawal" ) {
      message(" 
        Selamat idul fitri
        Taqabbalallahu minna waminkum
        Minal'aidzin walfa'idzin
      ")
    }
  }, [date])



}

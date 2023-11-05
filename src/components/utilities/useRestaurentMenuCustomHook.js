import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import { MENU_API } from "./constants";

const useRestaurentMenuCustomHook = (resId) =>{

    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{

        fetchData()

    },[])

     const  fetchData = async()=>{

        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        setResInfo(json?.data)

    }



    return resInfo;
}

export default useRestaurentMenuCustomHook
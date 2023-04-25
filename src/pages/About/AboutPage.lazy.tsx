import {lazy} from "react";

//export const AboutPageLazy = lazy(() => import('./About'))
export const AboutPageLazy = lazy(() => new Promise(resolve =>{
    // @ts-ignore
    setTimeout(() => resolve(import('./About')), 1500)
}))
import {characters, defaultHero} from "../../utils/constants.ts";
import {useParams} from "react-router";
import {SWContext} from "../../utils/context.ts";
import {ComponentType, useContext, useEffect} from "react";
import ErrorPage from "../ErrorPage.tsx";

export const withErrorPage = <T extends object>(Component: ComponentType<T>) => (props: T) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }else {
            changeHero()
        }

    }, [heroId])

    return characters[heroId] ? <Component  {...props} heroId={heroId}/> : <ErrorPage/>;
}
import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {withErrorPage} from "./hoc/withErrorPage.tsx";

const StarWars = () => {

    return (
        <Text>{starWarsInfo}</Text>
    )
};

export default withErrorPage(StarWars);
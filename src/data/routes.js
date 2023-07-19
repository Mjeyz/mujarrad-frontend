import ConceptInventory from "../pages/ConceptInventory/Index";
import ConceptStatistics from "../pages/ConceptStatistics/Index";

const routes = [
    {
        id: 1,
        path: '/',
        element: ConceptInventory
    },
    {
        id: 2,
        path: 'new-concept',
        element: ConceptStatistics
    }
]
export default routes;
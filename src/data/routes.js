import ConceptInventory from "../pages/ConceptInventory";
import ConceptStatistics from "../pages/ConceptStatistics";

const routes = [
    {
        id: 1,
        path: '/',
        element: ConceptInventory
    },
    {
        id: 2,
        path: 'stats',
        element: ConceptStatistics
    }
]
export default routes;
import { Route , createBrowserRouter , createRoutesFromElements } from "react-router-dom";
import { CreatePage } from "./components/CreatePage.jsx";
import { AnswerPage } from "./components/AnswerPage.jsx"
import { RecordFetchRouter } from "./components/RecordFetchRouter.jsx";
import { IndexPage } from "./components/IndexPage.jsx";
import { TopPage } from "./components/TopPage.jsx";
import { QuizPage } from "./components/QuizPage.jsx";


const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RecordFetchRouter />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/index" element={<IndexPage />}>
                <Route path="answer" element={<AnswerPage />} />
            </Route>
            <Route path="/create" element={<CreatePage />} />
            <Route path="/quiz" element={<QuizPage />} />
        </Route>
    )
)

export default routesLink;
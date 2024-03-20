import { Route , createBrowserRouter , createRoutesFromElements } from "react-router-dom";
//import { ApiFetchRouter }  from "./components/ApiFetchRouter";
//import { BirthDayPage } from "./components/BirthDayPage";
//import { GreetPage } from "./components/GreetPage";
import { CreatePage } from "./components/CreatePage";
//import { PlayerFetchRouter } from "./components/PlayerFetchRouter";
//import { NamePage } from "./components/NamePage"
import { AnswerPage } from "./components/AnswerPage"
import { RecordFetchRouter } from "./components/RecordFetchRouter";
import { IndexPage } from "./components/IndexPage";
import { TopPage } from "./components/TopPage";
import { QuizPage } from "./components/QuizPage";


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
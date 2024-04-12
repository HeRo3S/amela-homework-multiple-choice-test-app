import Dashboard from "../pages/Dashboard/Dashboard";
import ExamFinish from "../pages/ExamFinish/ExamFinish";
import ExamPage from "../pages/ExamPage/ExamPage";
import ListTopicManagerPage from "../pages/ListTopicManager/ListTopicManager";
import Login from "../pages/Login/Login";
import NewTestCreator from "../pages/NewTestCreator/NewTestCreator";
import NewTopicCreator from "../pages/NewTopicCreator/NewTopicCreator";
import QuestionManager from "../pages/QuestionManager/QuestionManager";
import TestQuizManagerPage from "../pages/TestQuizManager/TestQuizManager";
import UserManagerPage from "../pages/UserManager/UserManager";

interface RouteProperty {
  path: string;
  component: () => JSX.Element;
}

const routes: RouteProperty[] = [
  { path: `/dashboard`, component: Dashboard },
  { path: `/exam/finish`, component: ExamFinish },
  { path: `/exam/:id`, component: ExamPage },
  { path: `/login`, component: Login },
  { path: `manager/topic`, component: ListTopicManagerPage },
  { path: `/manager/topic/create`, component: NewTopicCreator },
  { path: `/manager/test`, component: TestQuizManagerPage },
  { path: `/manager/test/create`, component: NewTestCreator },
  { path: `/manager/question`, component: QuestionManager },
  { path: `/manager/user`, component: UserManagerPage },
];

export default routes;

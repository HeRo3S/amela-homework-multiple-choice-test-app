import { ThemeProvider } from "@mui/material";
import ExamPage from "./pages/ExamPage.1";
import Login from "./pages/Login";
import theme from "./config/muiTheme";
import Dashboard from "./pages/Dashboard";
import ExamFinish from "./pages/ExamFinish";
import UserManagerPage from "./pages/UserManager";
import TestQuizManagerPage from "./pages/TestQuizManager";
import ListTopicManagerPage from "./pages/ListTopicManager";
import NewTestCreator from "./pages/NewTestCreator";
import NewTopicCreator from "./pages/NewTopicCreator";
import QuestionManager from "./pages/QuestionManager";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QuestionManager />
    </ThemeProvider>
  );
}

export default App;

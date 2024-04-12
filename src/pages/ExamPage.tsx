import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExamPageMockData from "../mockData/ExamPageMockData";
import ExamAppbar from "../components/exam/Appbar";
import DummyToolbar from "../components/common/DummyToolbar";
import ExamDrawer from "../components/exam/Drawer";
import DialogQuestionGroupButtons, {
  StyledQuestionButton,
} from "../components/exam/DialogQuestionGroupButtons";
import StyledSpecialButton from "../components/common/SpecialButton";

const LocalCSSValues = {
  TestInfoContainerHeight: "165px",
  DrawerWidth: "289px",
};

const MainContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#c4c4c4",
  // height: "100%",
}));

const QuestionButtonsGroupContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#d9d9d9",
  border: "solid 1px",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const TestInfoContainer = styled(Grid)(({ theme }) => ({
  padding: "10px 15px",
  backgroundColor: "#d9d9d9",
  // height: LocalCSSValues.TestInfoContainerHeight,
  border: "solid 1px",
  [theme.breakpoints.down("md")]: {
    border: "none",
    backgroundColor: "#c4c4c4",
    paddingBottom: "0px",
  },
}));

const StyledTestTitle = styled(Typography)(({ theme }) => ({
  height: "61px",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledTimeLeftText = styled(Typography)(({ theme }) => ({
  height: "40px",
  display: "flex",
  alignItems: "center",
}));

const StyledLinearProgress = styled(LinearProgress)({
  margin: "10px 0",
  height: "21px",
  backgroundColor: "#c4c4c4",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#41c54e",
  },
});

const StyledQuestionContainer = styled(Grid)(({ theme }) => ({
  height: `calc(100% - ${LocalCSSValues.TestInfoContainerHeight})`,
  padding: "0 20px",
  display: "grid",
  gridTemplateRows: "3fr 6fr 4fr",
}));

const StyledNavButtonsContainer = styled(Grid)({
  justifySelf: "flex-end",
  padding: "20px 20px",
  alignItems: "flex-end",
});

const StyledNavButton = styled(Button)({
  backgroundColor: "#eee7a9",
  fontWeight: "700",
});

const StyledMoveToQuestionButtonContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function ExamPage() {
  const [timeLeftPercentage, setTimeLeftPercentage] = useState(100);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(3);

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isDialogQuestionsButtonOpen, setDialogQuestionsButtonOpen] =
    useState(false);

  const onCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };
  const onClickMobileDrawerButton = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  const onCloseDialogQuestionsButton = () => {
    setDialogQuestionsButtonOpen(false);
  };
  const onClickMoveToQuestionButton = () => {
    setDialogQuestionsButtonOpen((prev) => !prev);
  };

  useEffect(() => {
    const refreshTime = 1000;
    const timer = setInterval(() => {
      setTimeLeftPercentage((prev) => {
        return prev - (refreshTime / ExamPageMockData.time) * 100;
      });
    }, refreshTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function QuestionsButton() {
    const { questions } = ExamPageMockData;
    return (
      <Grid
        container
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexGrow="1"
      >
        {Array.from({ length: Math.ceil(questions.length / 5) }, (_, i) => (
          <Box key={i} display="flex" justifyContent="center">
            {questions.slice(i * 5, (i + 1) * 5).map((q, j) => (
              <StyledQuestionButton
                isAnswered={false}
                isShowing={currentQuestionIndex === i * 5 + j + 1}
                key={i * 5 + j + 1}
              >
                {i * 5 + j + 1}
              </StyledQuestionButton>
            ))}
          </Box>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <DialogQuestionGroupButtons
        currentQuestionIndex={currentQuestionIndex}
        isOpen={isDialogQuestionsButtonOpen}
        onClose={onCloseDialogQuestionsButton}
      />
      <ExamAppbar onClickDrawerButton={onClickMobileDrawerButton} />
      <nav>
        <ExamDrawer
          width={LocalCSSValues.DrawerWidth}
          isMobileOpen={isMobileDrawerOpen}
          onCloseMobile={onCloseMobileDrawer}
        />
      </nav>
      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <DummyToolbar />
        <MainContainer item container md={9}>
          <TestInfoContainer item xs={12}>
            <StyledTestTitle variant="h6">
              Kiểm tra an toàn bảo mật thông tin lần 2
            </StyledTestTitle>
            <StyledTimeLeftText variant="subtitle1">
              Còn lại: 14 phút 22 giây
            </StyledTimeLeftText>
            <StyledLinearProgress
              variant="determinate"
              value={timeLeftPercentage}
            />
          </TestInfoContainer>
          <StyledQuestionContainer item xs={12} container>
            <Typography variant="h6">
              {`Câu ${currentQuestionIndex}. ${ExamPageMockData.questions[currentQuestionIndex].question.text}`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "30px",
              }}
            >
              {ExamPageMockData.questions[currentQuestionIndex].answers.map(
                (a, i) => (
                  <FormControlLabel
                    label={`${String.fromCharCode(i + 65)}. ${a.text}`}
                    control={<Checkbox />}
                  />
                ),
              )}
            </Box>
            <StyledNavButtonsContainer container columns={12} rowSpacing={3}>
              <Grid item xs={4} md={3} display="flex" justifyContent="center">
                <StyledNavButton>Câu trước</StyledNavButton>
              </Grid>
              <Grid item xs={4} md={6} />
              <Grid item xs={4} md={3} display="flex" justifyContent="center">
                <StyledNavButton>Câu sau</StyledNavButton>
              </Grid>
              <StyledMoveToQuestionButtonContainer container item xs={12}>
                <StyledSpecialButton onClick={onClickMoveToQuestionButton}>
                  Chuyển đến
                </StyledSpecialButton>
              </StyledMoveToQuestionButtonContainer>
            </StyledNavButtonsContainer>
          </StyledQuestionContainer>
        </MainContainer>
        <QuestionButtonsGroupContainer item md={3}>
          {QuestionsButton()}
          <StyledNavButtonsContainer
            container
            sx={{ justifyContent: "center" }}
          >
            <StyledSpecialButton>Nộp Bài</StyledSpecialButton>
          </StyledNavButtonsContainer>
        </QuestionButtonsGroupContainer>
      </Grid>
    </>
  );
}

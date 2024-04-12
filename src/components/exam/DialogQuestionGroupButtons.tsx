import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  Grid,
  styled,
} from "@mui/material";
import ExamPageMockData from "../../mockData/ExamPageMockData";

interface IQuestionButtonProps extends ButtonProps {
  isAnswered: boolean;
  isShowing: boolean;
}
export const StyledQuestionButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isAnswered" && prop !== "isShowing",
})<IQuestionButtonProps>(({ isAnswered, isShowing }) => ({
  height: "63px",
  maxWidth: "47px",
  minWidth: "20px",
  margin: "10px 5px",
  padding: "0px 0px",
  border: "solid 1px",
  ...(isAnswered && {
    backgroundColor: "#b6b6b6",
  }),
  ...(isShowing && {
    backgroundColor: "#92fd9d",
    border: "solid 2px",
  }),
}));

const StyledNavButtonsContainer = styled(Grid)({
  justifySelf: "flex-end",
  padding: "20px 20px",
  alignItems: "flex-end",
});

const StyledSpecialButton = styled(Button)({
  backgroundColor: "#9F9D9F",
  borderRadius: "41px",
  fontWeight: "700",
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestionIndex: number;
}
export default function DialogQuestionGroupButtons(props: IProps) {
  const { onClose, isOpen, currentQuestionIndex } = props;

  function QuestionsButton() {
    const { questions } = ExamPageMockData;
    return (
      <>
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
        <StyledNavButtonsContainer container sx={{ justifyContent: "center" }}>
          <StyledSpecialButton>Nộp Bài</StyledSpecialButton>
        </StyledNavButtonsContainer>
      </>
    );
  }

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogContent>{QuestionsButton()}</DialogContent>
    </Dialog>
  );
}

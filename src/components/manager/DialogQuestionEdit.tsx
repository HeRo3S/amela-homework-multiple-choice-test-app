import { Padding } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  Typography,
  styled,
  Radio,
  RadioGroup,
  FormControlLabel,
  GridProps,
} from "@mui/material";

const StyledDialogContent = styled(DialogContent)({
  backgroundColor: "#f5d4d4",
});

const StyledNavButtonsContainer = styled(Grid)({
  justifySelf: "flex-end",
  padding: "20px 20px",
  alignItems: "flex-end",
});

interface IGridItemTitleProps extends GridProps {
  isCorrectAnswer?: boolean;
}
const GridItemTitle = styled(Grid)<IGridItemTitleProps>(
  ({ isCorrectAnswer }) => ({
    display: "flex",
    flexDirection: "row-reverse",
    ...(isCorrectAnswer && { color: "#26853b" }),

    "& *": {
      padding: "10px 20px",
      border: "solid 1px",
      borderRadius: "5px",
      backgroundColor: "#f3f1f1",
      ...(isCorrectAnswer && { fontWeight: "bold" }),
    },
  }),
);

const GridItemText = styled(Grid)<IGridItemTitleProps>(
  ({ isCorrectAnswer }) => ({
    ...(isCorrectAnswer && { color: "#26853b" }),

    "& *": {
      padding: "10px 20px",
      border: "solid 1px",
      borderRadius: "5px",
      backgroundColor: "#f3f1f1",
      ...(isCorrectAnswer && { fontWeight: "bold" }),
    },
  }),
);

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function DialogQuestionEdit(props: IProps) {
  const { onClose, isOpen } = props;

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <StyledDialogContent>
        <Grid
          container
          display="flex"
          alignItems="center"
          flexGrow="1"
          spacing={2}
        >
          <GridItemTitle item xs={3}>
            <Typography variant="body1">Câu hỏi</Typography>
          </GridItemTitle>
          <GridItemText item xs={9}>
            <Typography variant="body1" fontWeight={700}>
              Đâu không phải là một phương pháp kiểm thử hộp đen?
            </Typography>
          </GridItemText>

          <GridItemTitle item xs={3}>
            <Typography variant="body1">A</Typography>
          </GridItemTitle>
          <GridItemText item xs={9}>
            <Typography variant="body1">Phân vùng tương đương</Typography>
          </GridItemText>
          <GridItemTitle item xs={3}>
            <Typography variant="body1">B</Typography>
          </GridItemTitle>
          <GridItemText item xs={9}>
            <Typography variant="body1">Bảng quyết định</Typography>
          </GridItemText>
          <GridItemTitle item xs={3} isCorrectAnswer>
            <Typography variant="body1">C</Typography>
          </GridItemTitle>
          <GridItemText item xs={9} isCorrectAnswer>
            <Typography variant="body1">Unit test</Typography>
          </GridItemText>
          <GridItemTitle item xs={3}>
            <Typography variant="body1">D</Typography>
          </GridItemTitle>
          <GridItemText item xs={9}>
            <Typography variant="body1">Lược đồ chuyển trạng</Typography>
          </GridItemText>

          <Grid item xs={12} container>
            <Grid xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">Đáp án đúng:</Typography>
            </Grid>
            <Grid xs>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="a"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="a" control={<Radio />} label="A" />
                  <FormControlLabel value="b" control={<Radio />} label="B" />
                  <FormControlLabel value="c" control={<Radio />} label="C" />
                  <FormControlLabel value="d" control={<Radio />} label="D" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <StyledNavButtonsContainer container sx={{ justifyContent: "center" }}>
          <Grid item xs display="flex" justifyContent="center">
            <Button>Cancel</Button>
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <Button>Update</Button>
          </Grid>
        </StyledNavButtonsContainer>
      </StyledDialogContent>
    </Dialog>
  );
}

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import StyledSpecialButton from "../components/common/SpecialButton";

const PageContainer = styled(Box)({
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#c4c4c4",
});

const MainContainer = styled(Box)({
  display: "grid",
  flexDirection: "column",
  gridTemplateRows: "1fr 3fr 2fr",
  width: "60%",
  height: "50%",
  padding: "10px 20px",
  backgroundColor: "#d9d9d9",

  "& *": {
    alignSelf: "center",
  },
});

export default function ExamFinish() {
  return (
    <PageContainer>
      <MainContainer>
        <Typography variant="h6">
          Kiểm tra an toàn bảo mật thông tin lần 2
        </Typography>
        <Grid container columns={12}>
          <Grid item xs={6} container>
            <Grid item xs={8}>
              <Typography variant="body1">Số câu trả lời đúng:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">12</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">Số câu trả lời sai:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">3</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">Số câu chưa trả lời đúng:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">1</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">Tổng số câu hỏi:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">16</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6">Điểm số: 120 / 160</Typography>
          </Grid>
        </Grid>
        <StyledSpecialButton sx={{ justifySelf: "center" }}>
          Dashboard
        </StyledSpecialButton>
      </MainContainer>
    </PageContainer>
  );
}

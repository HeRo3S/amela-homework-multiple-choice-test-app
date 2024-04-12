import { Box, Card, Grid, Rating, Typography, styled } from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ScoreOutlinedIcon from "@mui/icons-material/ScoreOutlined";

const StyledCard = styled(Card)({
  width: "400px",
  height: "175px",
  marginBottom: "20px",
  backgroundColor: "#d9d9d9",
  border: "solid 1px",
  borderRadius: "4px",
});

const StyledGridContainer = styled(Grid)({
  padding: "0px 10px",
});

export default function SubjectCard() {
  return (
    <StyledCard>
      <StyledGridContainer container>
        <Grid item xs={12}>
          <Typography variant="h6">
            Kiểm tra an toàn bảo mật thông tin 2
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <TimerOutlinedIcon />
            <Typography variant="body1">7 phút</Typography>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
            <ScoreOutlinedIcon />
            <Typography variant="body1">200/250 điểm</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Rating defaultValue={4} precision={0.5} />
        </Grid>
      </StyledGridContainer>
    </StyledCard>
  );
}

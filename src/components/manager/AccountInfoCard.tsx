import { Grid, Typography, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CardContainer = styled(Grid)(({ theme }) => ({
  height: "80px",
  margin: "1rem 0",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#d9d9d9",
  border: "solid 1px",
  borderRadius: "4px",
}));

export default function AccountInfoCard() {
  return (
    <CardContainer container columns={12}>
      <Grid item xs={8} md={10}>
        <Typography variant="body1">
          Username: nguyenvanhuy@gmail.com
        </Typography>
        <Typography variant="body1">Name: Nguyen Van Huy</Typography>
      </Grid>
      <Grid
        item
        xs={2}
        md={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <EditIcon fontSize="large" />
      </Grid>
      <Grid
        item
        xs={2}
        md={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <DeleteIcon fontSize="large" />
      </Grid>
    </CardContainer>
  );
}

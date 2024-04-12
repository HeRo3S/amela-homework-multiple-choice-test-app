import { Button, Grid, Typography, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DialogQuestionEdit from "./DialogQuestionEdit";

const CardContainer = styled(Grid)(({ theme }) => ({
  margin: "1rem 0",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#d9d9d9",
  border: "solid 1px",
  borderRadius: "4px",
}));

export default function QuestionInfoCard() {
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const onClickEditButton = () => {
    setEditDialogOpen((prev) => !prev);
  };
  const OnCloseEditDialog = () => {
    setEditDialogOpen(false);
  };
  return (
    <>
      <DialogQuestionEdit
        isOpen={isEditDialogOpen}
        onClose={OnCloseEditDialog}
      />
      <CardContainer container columns={12} sx={{ flexGrow: 1 }}>
        <Grid item xs={8} md={10}>
          <Typography variant="body1">
            Đâu không phải là một phương pháp kiểm thử hộp đen?
          </Typography>
          <Typography variant="body1">A, Phân vùng tương đương</Typography>
          <Typography variant="body1">B, Bảng quyết định</Typography>
          <Typography variant="body1">C, Unit test</Typography>
          <Typography variant="body1">D, Lược đồ chuyển trạng</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          md={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button onClick={onClickEditButton}>
            <EditIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          md={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button onClick={onClickEditButton}>
            <DeleteIcon fontSize="large" />
          </Button>
        </Grid>
      </CardContainer>
    </>
  );
}

import { Avatar, Box, TextField, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InputPlaceholder = styled(Box)({
  width: "auto",
  height: "73px",
  display: "flex",
  alignItems: "flex-end",
  backgroundColor: "#F3F1F1",
  borderRadius: "4px",
});

const StyledTextField = styled(TextField)({
  flex: "1 1 auto",
  height: "73px",
  "& input": {
    paddingTop: "0",
    paddingBottom: "0",
    height: "73px",
    fontSize: "20px",
  },
});

const StyledIconContainer = styled(Avatar)({
  width: "115px",
  flex: "0 0 auto",
  height: "73px",
  backgroundColor: "#FFFFFF",
  borderRadius: "4px",
});

export function SearchBar() {
  return (
    <InputPlaceholder>
      <StyledTextField fullWidth placeholder="Search..."></StyledTextField>
      <StyledIconContainer variant="square">
        <SearchIcon sx={{ color: "#000000" }}></SearchIcon>
      </StyledIconContainer>
    </InputPlaceholder>
  );
}

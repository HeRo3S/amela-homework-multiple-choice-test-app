import { useState } from "react";
import ManagerDrawer from "../components/manager/ManagerDrawer";
import ManagerAppBar from "../components/manager/ManagerAppbar";
import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import DummyToolbar from "../components/common/DummyToolbar";
import { ManagerSearchBar } from "../components/manager/ManagerSearchBar";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LocalCSSProperties = {
  drawerWidth: "289px",
};

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `calc(100% - ${LocalCSSProperties.drawerWidth})`,
  minHeight: "100vh",
  backgroundColor: "#c4c4c4",
  flex: 1,
}));

const StyledContentContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 3fr 5fr 1fr",
  flexDirection: "column",
  flex: "1",
  width: "90%",
  maxWidth: "1200px",

  [theme.breakpoints.down("md")]: {
    gridTemplateRows: "4fr 5fr 1fr",
  },
}));

const StyledPageTitleContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  flexDirection: "column",
  alignContent: "center",
  gridTemplateRows: "1fr 1fr",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledGridCenterAll = styled(Grid)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

const StyledRowsNumberSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#9afac0",
  marginLeft: "10px",
  height: "32px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function NewTestCreator() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const onCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };
  const onClickMobileDrawerButton = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <ManagerAppBar
        name="Test manager"
        onClickDrawerButton={onClickMobileDrawerButton}
      />
      <ManagerDrawer
        width={LocalCSSProperties.drawerWidth}
        isMobileOpen={isMobileDrawerOpen}
        onCloseMobile={onCloseMobileDrawer}
      ></ManagerDrawer>
      <StyledMainContainer>
        <DummyToolbar />
        <StyledContentContainer>
          <StyledPageTitleContainer>
            <Typography variant="h5">Thêm mới test</Typography>
            <Breadcrumbs separator=">" aria-label="breadcrumbs">
              <Link underline="hover" color="inherit" href="/">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link underline="hover" color="inherit" href="/quiz_manager">
                <Typography variant="body1">Test quiz manager</Typography>
              </Link>
              <Typography color="text.primary" variant="body1">
                new test
              </Typography>
            </Breadcrumbs>
          </StyledPageTitleContainer>
          <Grid container columns={7} columnSpacing={1}>
            <Grid item xs={7}>
              <Typography>Test name: </Typography>
              <TextField></TextField>
            </Grid>
            <Grid item xs={3}>
              <Typography>Time: </Typography>
              <TextField></TextField>
            </Grid>
            <Grid item xs={4}>
              <Typography>Độ khó : </Typography>
              <Select defaultValue={"Medium"}>
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <Typography>Nhóm câu hỏi: </Typography>
              <Select defaultValue={"Medium"}>
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel control={<Checkbox />} label="Đảo câu hỏi" />
            </Grid>
          </Grid>
          <Grid container columns={11}>
            <StyledGridCenterAll
              item
              xs={5}
              sx={{ backgroundColor: "#ffffff" }}
            >
              <Typography variant="h6">Câu hỏi trong nhóm</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>STT</TableCell>
                      <TableCell></TableCell>
                      <TableCell>Tên câu hỏi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array(4).fill(
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>Câu hỏi 5</TableCell>
                      </TableRow>,
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  alignContent: "center",
                  padding: "10px 0px",
                }}
              >
                <Pagination count={10} variant="outlined" shape="rounded" />
                <StyledRowsNumberSelect defaultValue={8}>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </StyledRowsNumberSelect>
              </Box>
            </StyledGridCenterAll>
            <StyledGridCenterAll item xs={1}>
              <ArrowRightAltIcon fontSize="large" />
            </StyledGridCenterAll>
            <StyledGridCenterAll
              item
              xs={5}
              sx={{ backgroundColor: "#ffffff" }}
            >
              <Typography variant="h6">Câu hỏi đã chọn</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>STT</TableCell>
                      <TableCell>Tên câu hỏi</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array(4).fill(
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Câu hỏi 5</TableCell>
                        <TableCell>
                          <DeleteIcon />
                        </TableCell>
                      </TableRow>,
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  alignContent: "center",
                  padding: "10px 0px",
                }}
              >
                <Pagination count={10} variant="outlined" shape="rounded" />
                <StyledRowsNumberSelect defaultValue={8}>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </StyledRowsNumberSelect>
              </Box>
            </StyledGridCenterAll>
          </Grid>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button>ADD New</Button>
          </Box>
        </StyledContentContainer>
      </StyledMainContainer>
    </Box>
  );
}

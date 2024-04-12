import { ThemeProvider } from "@mui/material";
import theme from "./config/muiTheme";
import routes from "./config/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    routes.map((r) => ({
      ...r,
      element: <r.component />,
    })),
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

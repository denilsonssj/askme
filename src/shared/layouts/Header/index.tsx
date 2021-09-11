import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link/Link";

import useStyles from "./styles";

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Link component={RouterLink} to="/" className={classes.link}>Askme</Link>
        </Typography>
      </Toolbar>
  </AppBar>
  );
}
import { useContext } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link/Link";

import useStyles from "./styles";
import { LocalStorageContext } from "shared/contexts/LocalStorageContext";

export function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link component={RouterLink} to="/" className={classes.link}>
          Askme
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}
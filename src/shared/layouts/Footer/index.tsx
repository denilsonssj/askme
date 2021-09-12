import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import Link from "@material-ui/core/Link/Link";

import useStyles from "./styles";

export function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography 
        variant="body2"
        align="center"
        className={classes.text}
      >
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
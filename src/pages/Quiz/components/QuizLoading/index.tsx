import Box from "@material-ui/core/Box/Box";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

import useStyles from "./styles";

export function QuizLoading() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
}
import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    padding: 20,
  },
  text: {
    color: colors.grey[600]
  },
  link: {
    color: colors.grey[600],
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

export default useStyles;
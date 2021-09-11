import { colors } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column"
  },
  card: {
    minWidth: 500,
    padding: theme.spacing(2)
  },
  title: {
    textAlign: "center",
    fontWeight: 700
  },
  cardHeader: {},
  cardContent: {},
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  warningMessage: {
    fontWeight: 500,
    color: colors.grey[700]
  },
  button: {
    textTransform: "capitalize"
  }
}));

export default useStyles;
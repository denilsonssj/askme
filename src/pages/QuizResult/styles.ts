import { red, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center"
  },
  card: {
    minWidth: 700,
    padding: theme.spacing(4),
    width: "100%"
  },
  title: {
    textAlign: "center",
    fontWeight: 700
  },
  message: {
    textAlign: "center",
    marginBottom: 30
  },
  accordion: {
    marginBottom: 2
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column"
  },
  incorrectQuestion: {
    color: red[700],
    fontWeight: 500
  },
  answer: {
    "& p": {
      marginTop: theme.spacing(4)
    }
  },
  correctQuestion: {
    color: green[700],
    fontWeight: 500
  },
  textImportant: {
    fontWeight: 700
  },
  button: {
    textTransform: "capitalize"
  }
}));

export default useStyles;
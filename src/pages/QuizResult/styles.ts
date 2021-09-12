import { red, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    //height: "100%",
    alignItems: "center"
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: 700,
    height: "100%"
  },
  paperContent: {
    width: "100%"
  },
  paperItem: {
    padding: theme.spacing(4),
    "&:not(first-child)": {
      marginTop: 20
    }
  },
  title: {
    textAlign: "center",
    fontWeight: 700
  },
  subtitle: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30
  },
  answerTitle: {
    paddingTop: 5,
    marginBottom: 5,
    fontWeight: 500,
  },
  answersPaper: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 500
  },
  answer: {
    "& p": {
      marginTop: theme.spacing(4)
    }
  },
  correctQuestion: {
    color: green[600],
  },
  incorrectQuestion: {
    color: red[600]
  },
  textImportant: {
    fontWeight: 700
  },
  button: {
    textTransform: "capitalize",
    marginTop: 30
  }
}));

export default useStyles;
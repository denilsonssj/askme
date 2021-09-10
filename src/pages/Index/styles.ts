import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifySelf: "center",
    height: "100vh",
    width: "100%"
  },
  card: {
    minWidth: 300,
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "strech",
    justifyContent: "center",
    marginTop: theme.spacing(12),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8)
  },
  cardHeader: {
    textAlign: "center"
  },
  title: {
    fontWeight: 700
  },
  cardContent: {}
}));

export default useStyles;
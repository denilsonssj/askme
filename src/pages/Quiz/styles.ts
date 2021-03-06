import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  card: {
    minWidth: 500
  },
  cardHeader: {},
  cardContent: {}
}));

export default useStyles;
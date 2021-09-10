import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column"
  },
  card: {
    minWidth: 500
  },
  cardHeader: {},
  cardContent: {}
}));

export default useStyles;
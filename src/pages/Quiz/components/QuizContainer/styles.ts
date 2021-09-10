import { red } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    padding: 20,
    borderRadius: 5
  },
  cardHeader: {
    minWidth: 350,
  },
  cardContent: {},
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    textTransform: "capitalize"
  },
  formControl: {},
  formControlHelper: {
    color: red[500]
  }
}));

export default useStyles;
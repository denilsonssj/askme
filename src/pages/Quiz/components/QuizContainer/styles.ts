import { red } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
  gridButton: {
    marginTop: 20
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
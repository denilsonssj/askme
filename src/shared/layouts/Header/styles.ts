import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    color: colors.grey[50],

    "&:hover": {
      textDecoration: "none"
    }
  }
}));

export default useStyles;
import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifySelf: "center"
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
  cardActions: {
    marginTop: theme.spacing(2)
  },
  title: {
    fontWeight: 700,
    color: colors.grey[900]
  },
  footerMessage: {
    fontWeight: 500,
    color: colors.grey[500]
  },
  button: {
    textTransform: "capitalize",
    marginTop: theme.spacing(4)
  },
  link: {
    color: colors.grey[700],

    "&:hover": {
      textDecoration: "none",
    }
  }
}));

export default useStyles;
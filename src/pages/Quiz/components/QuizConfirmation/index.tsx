import { Fragment } from "react";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Typography from "@material-ui/core/Typography/Typography";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

interface IQuizConfirmationProps {
  handleClickStartButton: () => void;
};

export function QuizConfirmation({ handleClickStartButton }: IQuizConfirmationProps) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>
      <Typography component="h1" variant="h5">
            Confirmação de segurança
        </Typography>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader}>
          </CardHeader>
          <CardContent className={classes.cardContent}>
            <Button
              color="primary"
              variant="outlined"
              onClick={handleClickStartButton}
            >
              Start
            </Button>
            <Button 
              color="secondary"
              variant="outlined"
              onClick={() => history.push("/")}
            >
              Cancel
            </Button>
          </CardContent>
        </Card>
    </Fragment>
  );
}
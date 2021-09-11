import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";

import useStyles from "./styles";

interface IQuizConfirmationProps {
  handleClickStartButton: () => void;
};

export function QuizConfirmation({ handleClickStartButton }: IQuizConfirmationProps) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>
        <Card className={classes.card}>
          <CardHeader title={
            <Typography
              component="h4"
              variant="h4"
              className={classes.title}
            >
              Confirm your answer
            </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent className={classes.cardContent}>
          <Typography component="p" className={classes.warningMessage}>
            Click the "Start" button to start your quiz, if you want to quit or change {" "}
            the amount of questions to be solved click the "Cancel" button.
          </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={handleClickStartButton}
            >
              Start
            </Button>
            <Button 
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
    </Fragment>
  );
}
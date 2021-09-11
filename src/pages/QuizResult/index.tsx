import { Fragment, useState, useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from "./styles";

import { LocalStorageContext } from "shared/contexts/LocalStorageContext";
import { IAnswerStorage } from "shared/interfaces/AnswerStorage";

export function QuizResult() {

  const classes = useStyles();
  const history = useHistory();
  const [result, setResult] = useState<IAnswerStorage>();
  const { getQuizFromLocalStorage } = useContext(LocalStorageContext);

  const loadDataFromLocalStorage = () => {
    const data = getQuizFromLocalStorage();
    if (data) {
      setResult(data);
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
    document.title = "Result";
  }, []);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card className={classes.card}>
      <CardHeader 
        title={
          <Typography component="h4" variant="h4" className={classes.title}>
            Final Result
          </Typography>
        } 
      />
      <CardContent>
        {result ? (
          <Fragment>
            <Typography component="h5" variant="h5" className={classes.message}>
              You got {" "}
              <Typography 
                component="span"
                variant="h5"
                className={classes.textImportant}
              >
                { result.hits } {" "}
              </Typography>
              out of {" "}
              <Typography 
                component="span"
                variant="h5"
                className={classes.textImportant}
              >
                { result.hits + result.errors } {" "}
              </Typography>
              questions right
            </Typography>
            {
              result.questions.map((question, index) => (
                <Accordion key={question.question} className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${index}-content`}
                    id={`${index}-header`}
                  >
                    <Typography 
                      className={
                        question.selectedAnswer === question.correctAnswer ? 
                          classes.correctQuestion 
                          :
                          classes.incorrectQuestion }
                    >
                      {`${index + 1} - ${question.question}`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                   <Typography component="p">
                   <Typography component="span" style={{ fontWeight: 700}}>Correct answer: </Typography> { question.correctAnswer }
                  </Typography>
                  <Typography component="p">
                    <Typography component="span" style={{ fontWeight: 700}}>Your answer: </Typography> { question.selectedAnswer }
                  </Typography>
                </AccordionDetails>
              </Accordion>
              ))
            }
          </Fragment>
        ) : (
        <Typography>There are no results to show!</Typography>
        ) 
      }
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
          className={classes.button}
        >
          Back to home
        </Button>
      </CardActions>
      </Card>
    </Container>
  );
}
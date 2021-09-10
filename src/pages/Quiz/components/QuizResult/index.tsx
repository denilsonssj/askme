import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

import useStyles from "./styles";

interface IResult {
  totalErrors: number;
  totalHits: number;
  questions: Array<{
    question: string;
    selectedAnswer: string;
    correctAnswer: string;
  }>;
};

export function QuizResult() {

  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <Typography 
        component="h5"
        variant="h5"
      >
        Resultado final
      </Typography> 
        <CardContent className={classes.cardContent}>
        
        </CardContent>
        <Button 
          variant="outlined"
          color="primary"
          onClick={() => history.push("/")}
        >
          Ir para página inicial
        </Button>
    </Card>
  );
}
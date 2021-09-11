import * as yup from 'yup';
import { Formik, Field, FormikHelpers } from 'formik';
import { RadioGroup } from "formik-material-ui";
import Grid from '@material-ui/core/Grid/Grid';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyles from "./styles";

interface IQuestion {
  category: string;
  type: string;
  correctAnswer: string;
  answers: string[];
  question: string;
  difficulty: string;
};

interface IQuizContainerProps {
  question: IQuestion;
  currentQuestionNumber: number;
  totalQuestions: number;
  handleClickContinueButton: (questionTitle: string, selectedAnswer: string, correctAnswer: string) => void;
};

interface IFormData {
  selectedAnswer: string;
};

const SignupSchema = yup.object().shape({
  selectedAnswer: yup.string().required("Required field!")
});

export function QuizContainer({ question, currentQuestionNumber, totalQuestions, handleClickContinueButton }: IQuizContainerProps) {
  const classes = useStyles();

  const onSubmit = ({ selectedAnswer }: IFormData, formikHelpers: FormikHelpers<IFormData>) => {
    formikHelpers.setSubmitting(false);
    handleClickContinueButton(question.question, selectedAnswer, question.correctAnswer);
    formikHelpers.resetForm();
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        title={`Questão ${currentQuestionNumber} - ${ question.question } `} 
      />
      <CardContent className={classes.cardContent}>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          selectedAnswer: ""
        }}
        validationSchema={SignupSchema}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <FormControl
                component="fieldset"
                className={classes.formControl}
              >
                <Field
                  name="selectedAnswer"
                  label="Best selectedAnswer"
                  component={RadioGroup}
                >
                  {
                    question.answers.map(answer => (
                      <FormControlLabel
                        key={answer}
                        value={answer}
                        control={<Radio color="primary" />}
                        label={answer}
                      />
                    ))
                  }
                  { errors.selectedAnswer && (
                    <FormHelperText className={classes.formControlHelper}>
                      {errors.selectedAnswer}
                    </FormHelperText>
                  )}
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography component="span">{currentQuestionNumber} of {totalQuestions} questions</Typography>
      </CardActions>
    </Card>
  );
}
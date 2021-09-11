import { useEffect, useState, useContext } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory, Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";
import { CardActions } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import Link from "@material-ui/core/Link/Link";

import useStyles from "./styles";
import { LocalStorageContext } from "shared/contexts/LocalStorageContext";

const validationSchema = yup.object({
  totalQuestions: yup
    .number()
    .integer()
    .positive("Type a valid value")
    .required("Field required")
});

interface IProps {
  totalQuestions: number;
};

export function IndexPage() {
  const classes = useStyles();
  const history = useHistory();
  const [isPreviewQuiz, setIsPreviewQuiz] = useState<boolean>(false);
  const { getQuizFromLocalStorage } = useContext(LocalStorageContext);
  const formik = useFormik({
    initialValues: {
      totalQuestions: 1
    },
    validationSchema: validationSchema,
    onSubmit: ({ totalQuestions }: IProps) => {
      if (totalQuestions) {
        history.push("/quiz", {
          amount: String(totalQuestions)
        });
      }
    }
  });

  useEffect(() => {
    document.title = "Askme";
    const data = getQuizFromLocalStorage();
    if (data) {
      if (data.isFinalized) {
        setIsPreviewQuiz(isPreviewQuiz => !isPreviewQuiz);
      }
    }
  }, []);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Card className={classes.card}>
        <CardHeader 
          className={classes.cardHeader}
          title={
            <Typography
              className={classes.title}
              component="h2" 
              variant="h2"
            >
              Askme
            </Typography>
          } 
        />
        <CardContent>
          <form noValidate onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                required
                type="number"
                id="totalQuestions"
                name="totalQuestions"
                label="Question quantity"
                placeholder="Type a quantity questions"
                variant="outlined"
                value={formik.values.totalQuestions}
                onChange={formik.handleChange}
                error={formik.touched.totalQuestions && Boolean(formik.errors.totalQuestions)}
                helperText={formik.touched.totalQuestions && formik.errors.totalQuestions}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Continuar
            </Button>
          </form>
        </CardContent>
        <CardActions className={classes.cardActions}>
          { isPreviewQuiz && (
            <Typography component="span" variant="body2" className={classes.footerMessage}>
              You have solved a quiz previously, if you want to review the result {" "}
              <Link
                component={RouterLink}
                to="/quiz/result"
                className={classes.link}
              >
                click here
              </Link>.
            </Typography>
           )
          }
        </CardActions>
      </Card>
    </Container>
  );
}
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";
import TextField from "@material-ui/core/TextField/TextField";

import useStyles from "./styles";

const validationSchema = yup.object({
  totalQuestions: yup
    .number()
    .integer()
    .positive("Digite um valor válido")
    .required("Campo é obrigatório")
});

interface IProps {
  totalQuestions: number;
};

export function IndexPage() {
  const classes = useStyles();
  const history = useHistory();
  const [isPreviewQuiz, setIsPreviewQuiz] = useState<boolean>(false);
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
    document.title = "Página Inicial";
    const data = localStorage.getItem("app-askme:quiz");
    if (data) {
      const storagedData = JSON.parse(data);
      if (storagedData.isFinalized) {
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
            <Typography className={classes.title} component="h2" variant="h2">
              Quiz
            </Typography>
          } 
        />
        <CardContent className={classes.cardContent}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                type="number"
                id="totalQuestions"
                name="totalQuestions"
                label="Quantidade de Questões"
                value={formik.values.totalQuestions}
                onChange={formik.handleChange}
                error={formik.touched.totalQuestions && Boolean(formik.errors.totalQuestions)}
                helperText={formik.touched.totalQuestions && formik.errors.totalQuestions}
            />
            <Button
              type="submit"
              color="primary"
            >
              Continuar
            </Button>
            { isPreviewQuiz && (<span>Deseja rever o relatório do quiz anterior?</span>)}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
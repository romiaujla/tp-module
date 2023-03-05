import { Typography } from "@mui/material";

function FormControlErrorComponent(props: FormControlErrorComponentProps) {
  return (
    <Typography color="red" fontSize="12px" textAlign="right">
      {props.errorMessage}
    </Typography>
  );
}

export interface FormControlErrorComponentProps {
  errorMessage: string;
}

export default FormControlErrorComponent;

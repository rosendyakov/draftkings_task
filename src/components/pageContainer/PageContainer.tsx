import { Grid, Paper } from "@mui/material";

import styles from "./pageContainer.module.scss";
import StarWarsLogo from "../../assets/Star_Wars_Logo.png";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Grid
      container
      padding={"2rem 1rem 1rem 1rem"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Grid item>
        <img src={StarWarsLogo} className={styles.logo} />
      </Grid>
      <Paper>{children}</Paper>
    </Grid>
  );
};

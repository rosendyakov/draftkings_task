import { Grid } from "@mui/material";
import StarWarsLogo from "../../assets/Star_Wars_Logo.png";
import styles from "./PageContainer.module.scss";

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
      {children}
    </Grid>
  );
};

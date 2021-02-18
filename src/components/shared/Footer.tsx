import * as React from "react";
import { Container, makeStyles } from "@material-ui/core";

interface Props {}

const useStyles = makeStyles((theme) => ({
  footerContainer: {},
  footerTop: {
    marginTop: "30px",
    backgroundColor: "#e5e5e5",
    height: "30px",
  },
  footerBottom: {
    paddingTop: "20px",
    backgroundColor: "#666666",
    paddingBottom: "13px",
  },
}));

const Footer: React.FC<Props> = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerTop}></div>
      <div className={classes.footerBottom}>
        <Container maxWidth="lg">
          <span>footer logo</span>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

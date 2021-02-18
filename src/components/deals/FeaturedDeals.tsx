import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

const useStyles = makeStyles((theme) => ({
  featuredDeals: {
    backgroundColor: "#666666",
    paddingTop: "40px",
    paddingBottom: "40px",
    marginTop: "50px",
  },
}));

const FeaturedDeals: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  return <div className={classes.featuredDeals}>Featured Deals go here</div>;
};

export default FeaturedDeals;

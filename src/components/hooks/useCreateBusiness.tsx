import * as React from "react";
import { MenuItem } from "@material-ui/core";

export const useCreateBusiness = () => {
  const states = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const [error, setError] = React.useState<string>("");
  const [businessName, setBusinessName] = React.useState<string>("");
  const [businessWebsite, setBusinessWebsite] = React.useState<string>("");
  const [businessAddress, setBusinessAddress] = React.useState<string>("");
  const [businessCity, setBusinessCity] = React.useState<string>("");
  const [businessState, setBusinessState] = React.useState<string>(states[0]);
  const [businessZip, setBusinessZip] = React.useState<string>("");
  const [businessPhone, setBusinessPhone] = React.useState<string>("");
  const [businessFacebook, setBusinessFacebook] = React.useState<string>("");
  const [contactName, setContactName] = React.useState<string>("");
  const [contactEmail, setContactEmail] = React.useState<string>("");
  const [contactPhone, setContactPhone] = React.useState<string>("");
  const [contactJobTitle, setJobTitle] = React.useState<string>("");

  const stateOptions = states.map((state) => {
    return (
      <MenuItem key={state} value={state}>
        {state}
      </MenuItem>
    );
  });

  const validForm = () => {
    let valid = false;
    if (
      businessName &&
      businessWebsite &&
      businessAddress &&
      businessCity &&
      businessState &&
      businessPhone &&
      businessFacebook &&
      contactName &&
      contactEmail &&
      contactPhone &&
      contactJobTitle
    ) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      !re.test(String(contactEmail).toLowerCase())
        ? (valid = false)
        : (valid = true);
    }

    return valid;
  };

  const createBusiness = (event: any) => {
    event.preventDefault();
    setError("");

    if (validForm()) {
      let auth_token = localStorage.getItem("auth_token");
      fetch(`${process.env.REACT_APP_API_URL}/create_business`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${auth_token}`,
        },
        body: JSON.stringify({
          business: {
            business_name: businessName,
            business_website: businessWebsite,
            business_address: businessAddress,
            business_city: businessCity,
            business_state: businessState,
            business_phone: businessPhone,
            business_facebook: businessFacebook,
            contact_name: contactName,
            contact_email: contactEmail,
            contact_phone: contactPhone,
            contact_job_title: contactJobTitle,
          },
        }),
      })
        .then((result) => result.json())
        .then((result) => {
          if (typeof result.error !== "undefined") {
            setError(result.error);
          } else {
            localStorage.setItem("auth_role", "business");
            location.href = "/business-profile";
          }
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setError("Invalid entries, please check your entries and try again.");
    }
  };

  return {
    error,
    stateOptions,
    fields: {
      businessName,
      setBusinessName,
      businessWebsite,
      setBusinessWebsite,
      businessAddress,
      setBusinessAddress,
      businessCity,
      setBusinessCity,
      businessState,
      setBusinessState,
      businessZip,
      setBusinessZip,
      businessPhone,
      setBusinessPhone,
      businessFacebook,
      setBusinessFacebook,
      contactName,
      setContactName,
      contactEmail,
      setContactEmail,
      contactPhone,
      setContactPhone,
      contactJobTitle,
      setJobTitle,
    },
    createBusiness,
  };
};

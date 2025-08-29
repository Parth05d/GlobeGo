import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/countryApi";
import Loader from "../UI/Loader";
import CountryDetailsCard from "./CountryDetailsCard";

export default function CountryDetails() {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res.data);

      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params]);

  if (isPending) return <Loader />;
  return (
    <div>{country ? <CountryDetailsCard country={country} /> : <Loader />}</div>
  );
}

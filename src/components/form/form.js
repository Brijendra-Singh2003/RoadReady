"use client";

import { useState } from "react";
import classes from "./form.module.css";

export default function Form() {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const host = process.env.NEXT_PUBLIC_HOST;

  function handleChange({ target: { value, name } }) {
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function updateData() {
    fetch (`${host}/api/db`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
    .then((response) => {
      setDisabled(false);
    });
  }

  return (
    <>
    <form className={classes.form} onSubmit={updateData}>

      <label htmlFor="name"><span>Name: </span></label>

      <input
        required={true}
        id="name"
        type="text"
        onChange={handleChange}
        placeholder="Name..."
        name="name"
        value={data.name} />

      <label htmlFor="state"><span>State: </span></label>

      <input
        required={true}
        id="state"
        type="text"
        onChange={handleChange}
        placeholder="State..."
        name="state"
        value={data.state} />

      <label htmlFor="city"><span>City: </span></label>

      <input
        id="city"
        type="text"
        onChange={handleChange}
        placeholder="City..."
        name="city"
        value={data.city} />

      <label htmlFor="about"><span>Description: </span></label>

      <textarea
      required
        className={classes.input+' input'}
        id="about"
        name="desc"
        type="text"
        rows={10}
        onChange={handleChange}
        maxLength="400"
        placeholder="max 400 chars"
        defaultValue={data.desc} />

      <button
        disabled={disabled}
        className={"mt-3 col-start-1 text-lg submitButton"}
        value='submit'
        > submit </button>

      <button
        type="button"
        className="mt-3 col-start-3 text-lg cancel"
        onClick={() => router.back()}
        > Cancel </button>

    </form>
    </>
  );
}

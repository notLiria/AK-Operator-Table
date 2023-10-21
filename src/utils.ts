/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { Character } from "./types";

export const convertDataToObject = (data: { [key: string]: any }) => {
  return Object.keys(data).reduce((prev: any, cur: string) => {
    const output = data[cur] as Character;
    return [...prev, output];
  }, []);
};

export const fetchData = async (url: string) => {
  const data = await axios.get(url);
  return convertDataToObject(data.data) as Character[];
};

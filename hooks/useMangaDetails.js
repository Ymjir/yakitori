import { useEffect, useState } from "react";
import axios from "axios";
import * as cheerio from "cheerio";

import { urls } from "../constants/urls";
import { useError } from "./common";

export const useMangaDetails = (mangaId) => {
  const setError = useError();

  const [isLoading, setIsLoading] = useState(true);
  const [manga, setManga] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(mangaId)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        // Get manga details
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [mangaId]);

  return [manga, isLoading];
};

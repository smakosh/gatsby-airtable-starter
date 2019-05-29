import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default id => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchSceneById = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/appCxaFkAnDYD1Wy4/Scenes/${id}`
      );
      setData(data);
      setLoading(false);
    } catch (err) {
      setErrors(err);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSceneById();
  }, [fetchSceneById]);

  return [loading, data, errors];
};

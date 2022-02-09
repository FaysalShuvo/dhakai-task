// style
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DashboardCard from "../DashboardCard/DashboardCard";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const api = "https://devapi.dhakai.com/api/v2/manufacturers";
  const token = user.token.token;

  useEffect(() => {
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setData(res.data.result.manufacturers);
      })
      .catch((err) => setError(err));
  }, [token]);

  return (
    <div className="dashboard row p-4">
      {data && <DashboardCard lists={data} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Dashboard;

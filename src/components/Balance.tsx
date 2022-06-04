import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { useMemo, useState } from "react";
import "./components.css";

export default function Balance() {
  const [loading, setLoading] = useState(true);
  const money = useMemo(
    () => Math.floor(Math.random() * (5000 - 100) + 100),
    []
  );

  return (
    <Card variant="outlined" className="balance-card">
      <CardContent style={{ textAlign: "initial" }}>
        <Typography color="white">My balance</Typography>
        <Typography color="white" variant="h5">
          <div className="flex-switch">
            {loading ? <b>${money}</b> : "----------"}{" "}
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

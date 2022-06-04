import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { useState } from "react";
import "./components.css";

export default function Balance() {
  const [loading, setLoading] = useState(true);
  return (
    <Card variant="outlined" className="balance-card">
      <CardContent style={{ textAlign: "initial" }}>
        <Typography color="text.secondary">My balance</Typography>
        <Typography color="text.secondary" variant="h4">
          <div className="flex-switch">
            123.442{" "}
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

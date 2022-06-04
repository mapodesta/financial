import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

import { Chart } from "./Chart";

export default function Spending() {
  return (
    <Card variant="outlined" className="spending-card">
      <CardContent style={{ textAlign: "initial" }}>
        <h2>Spending - Last 7 Days</h2>
        <Chart />
      </CardContent>
    </Card>
  );
}

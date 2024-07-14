import { Card, Stack, Typography } from "@mui/material";
import { CurrentPowerSection } from "./components/current-power-section/current-power-section";

function App() {
  return (
    <Card sx={{ height: 1, minHeight: 380, p: 2 }}>
      <Typography variant="h5" justifySelf="flex-start" textAlign="center">
        Current power
      </Typography>
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{ pt: 4 }}
      >
        <CurrentPowerSection
          stationPower={320}
          solarPower={100}
          gridPower={12}
          batteryPower={20}
          loadPower={100}
        />
      </Stack>
    </Card>
  );
}

export default App;

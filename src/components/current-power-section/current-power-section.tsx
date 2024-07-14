import LightModeIcon from "@mui/icons-material/LightMode";
import PowerIcon from "@mui/icons-material/Power";
import { Box, Stack, SvgIcon } from "@mui/material";

import { ReactComponent as BatteryIcon } from "./../../assets/battery-icon.svg";
import { ReactComponent as InverterIcon } from "./../../assets/inverter-icon.svg";
import { ReactComponent as PowerPoleIcon } from "./../../assets/power-pole-icon.svg";

import {
  AbsoluteWrapper,
  ChartLabelBottom,
  ChartLabelTop,
  IconBorder,
  IconWrapper,
} from "./current-power-section.styled";
import { PowerProgress } from "../power-progress";

export type SiteFormValue = {};

type CurrentPowerSectionProps = {
  stationPower?: number;
  solarPower?: number;
  gridPower?: number;
  batteryPower?: number;
  loadPower?: number;
  unit?: string;
};

export const CurrentPowerSection = ({
  stationPower = NaN,
  solarPower = NaN,
  gridPower = NaN,
  batteryPower = NaN,
  loadPower = NaN,
  unit = "kW",
}: CurrentPowerSectionProps) => {
  const solarAbs = Math.abs(solarPower);
  const loadAbs = Math.abs(loadPower);
  const gridAbs = Math.abs(gridPower);
  const batteryAbs = Math.abs(batteryPower);

  const maxPower = Math.max(
    ...[solarAbs, loadAbs, gridAbs, batteryAbs].filter(Boolean)
  );

  const solarPercentage = round2Dec(solarAbs / maxPower);
  const loadPercentage = round2Dec(loadPower / maxPower);
  const gridPercentage = round2Dec(gridPower / maxPower);
  const batteryPercentage = round2Dec(batteryPower / maxPower);

  return (
    <Box position="relative" width={250} height={250} justifySelf="center">
      <AbsoluteWrapper
        sx={{ transform: "rotate(135deg) translate(0px, 60px)" }}
      >
        <PowerProgress speed={solarPercentage} color="#e9c149" />
      </AbsoluteWrapper>
      <AbsoluteWrapper
        sx={{ transform: "rotate(225deg) translate(0px, 60px)" }}
      >
        <PowerProgress speed={loadPercentage} color="#2e75b6" />
      </AbsoluteWrapper>
      <AbsoluteWrapper
        sx={{ transform: "rotate(-45deg) translate(0px, 60px)" }}
      >
        <PowerProgress speed={batteryPercentage} color="#c1deae" />
      </AbsoluteWrapper>
      <AbsoluteWrapper
        sx={{ transform: "rotate(45deg) translate(15px, 60px)" }}
      >
        <PowerProgress speed={gridPercentage * -1} color="#F9629F" />
      </AbsoluteWrapper>

      <AbsoluteWrapper
        sx={{ transform: "rotate(45deg) translate(-15px, 60px)" }}
      >
        <PowerProgress speed={gridPercentage} color="#F9629F" />
      </AbsoluteWrapper>

      <Stack height="100%" justifyContent="space-between">
        <Stack direction="row" justifyContent="space-between">
          <Box position="relative" width="80px" height="80px" color="#e9c149">
            <IconBorder />
            <IconWrapper>
              <LightModeIcon fontSize="large" />
            </IconWrapper>
            <ChartLabelTop>
              {formatNumber(stationPower, 1)} {unit}
            </ChartLabelTop>
            <ChartLabelBottom>
              {formatNumber(solarAbs, 1)} {unit}
            </ChartLabelBottom>
          </Box>
          <Box position="relative" width="80px" height="80px" color="#81adc8">
            <IconBorder />
            <IconWrapper>
              <PowerIcon fontSize="large" />
            </IconWrapper>
            <ChartLabelTop>
              {formatNumber(loadAbs, 1)} {unit}
            </ChartLabelTop>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box position="relative" width="80px" height="80px" color="#F9629F">
            <IconBorder />
            <IconWrapper>
              <SvgIcon fontSize="large">
                <PowerPoleIcon />
              </SvgIcon>
            </IconWrapper>
            <ChartLabelBottom>
              {formatNumber(gridAbs, 1)} {unit}
            </ChartLabelBottom>
          </Box>
          <Box position="relative" width="80px" height="80px" color="#c1deae">
            <IconBorder />
            <IconWrapper>
              <BatteryIcon width={40} height={40} />
            </IconWrapper>
            <ChartLabelBottom>
              {formatNumber(batteryAbs, 1)} {unit}
            </ChartLabelBottom>
          </Box>
        </Stack>
      </Stack>

      <AbsoluteWrapper>
        <Box position="relative" width="80px" height="80px">
          <IconBorder />
          <IconWrapper>
            <InverterIcon width={40} height={40} />
          </IconWrapper>
        </Box>
      </AbsoluteWrapper>
    </Box>
  );
};

function round2Dec(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function formatNumber(value?: number, fractionDigits = 2) {
  if (value == undefined || Number.isNaN(value)) {
    return "--";
  }

  const result = parseFloat(value.toFixed(fractionDigits)).toLocaleString();

  if (result == "-0") {
    return "0";
  }

  return result;
}

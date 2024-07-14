import { Box, styled, Typography } from "@mui/material";

export const IconWrapper = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  color: "currentcolor",
}));

export const AbsoluteWrapper = styled(Box)(({}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ChartLabelTop = styled(Typography)(({}) => ({
  position: "absolute",
  top: 0,
  width: "100%",
  textAlign: "center",
  transform: "translate(0%, -100%)",
}));

export const ChartLabelBottom = styled(Typography)(({}) => ({
  position: "absolute",
  top: "100%",
  width: "100%",
  textAlign: "center",
}));

export const IconBorder = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderStyle: "solid",
  borderWidth: 5,
  borderRadius: "50%",
  borderColor: "currentColor",
  background: theme.palette.background.paper,
}));

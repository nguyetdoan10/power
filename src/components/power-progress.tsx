import CircleIcon from "@mui/icons-material/Circle";
import { Box, keyframes } from "@mui/material";

const indeterminateKeyframe = keyframes`
  0% {
    bottom: -20%;
  }

  60% {
    bottom: 80%;
  }

  100% {
    bottom: 100%;
  }
`;

const indeterminateNegativeKeyframe = keyframes`
  0% {
    top: -20%;
  }

  60% {
    top: 80%;
  }

  100% {
    top: 100%;
  }
`;

interface PowerProgressProps {
  speed: number;
  color: string;
}

export function PowerProgress({ speed, color }: PowerProgressProps) {
  const IconComponent = CircleIcon;
  const show = speed != 0 && !Number.isNaN(speed);

  return (
    <Box
      width={2}
      height={50}
      position="relative"
      sx={{
        borderStyle: show ? "solid" : "dashed",
        borderWidth: "2px",
        borderColor: color,
      }}
    >
      <Box
        position="absolute"
        sx={{
          color: color,
          marginLeft: "50%",
          ...(show && {
            animationName: `${
              speed < 0 ? indeterminateNegativeKeyframe : indeterminateKeyframe
            }`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: "0s",
            animationDuration: `${1 / Math.abs(speed)}s`,
          }),
        }}
      >
        {show ? (
          <IconComponent
            sx={{
              fontSize: 15,
              marginLeft: "-50%",
              ...(speed > 0 && {
                marginBottom: "-60%",
              }),
              ...(speed < 0 && {
                marginTop: "-40%",
              }),
            }}
          />
        ) : null}
      </Box>
    </Box>
  );
}

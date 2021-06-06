import * as React from "react";

export const ExampleIcon = (props) => {
  const color = props.color || "#ffffff";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h128v128H0z" />
        </clipPath>
      </defs>
      <g
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={4}
        clipPath="url(#prefix__a)"
      >
        <path d="M32.846 31.23h-4.923A4.938 4.938 0 0023 36.154V110a4.938 4.938 0 004.923 4.923h56.615A4.923 4.923 0 0089.461 110v-4.923" />
        <g strokeLinecap="round">
          <path d="M105.151 34.612L86.079 15.541c-.986-.987-1.541-1.541-4-1.541H45.154a4.923 4.923 0 00-4.923 4.923v73.846a5.448 5.448 0 004.923 4.923h56.615a5.448 5.448 0 004.923-4.923V38.615a5.944 5.944 0 00-1.541-4.003z" />
          <path d="M82.077 14v19.692A5.293 5.293 0 0087 38.615h19.692" />
        </g>
      </g>
    </svg>
  );
};

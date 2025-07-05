import Svg, {
  Circle,
  Defs,
  Image,
  Path,
  Pattern,
  Rect,
  Use,
} from "react-native-svg";

export const IconPlay = () => {
  return (
    <Svg
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const IconPause = () => {
  return (
    <Svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const LogoIcon = () => {
  return (
    <Svg
      width="158"
      height="40"
      viewBox="0 0 158 40"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <Rect
        x="0.818115"
        width="156.364"
        height="40"
        fill="url(#pattern0_3717_508)"
      />
      <Defs>
        <Pattern
          id="pattern0_3717_508"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            xlinkHref="#image0_3717_508"
            transform="matrix(0.00414938 0 0 0.0162203 0 -0.05149)"
          />
        </Pattern>
        <Image
          id="image0_3717_508"
          width="241"
          height="68"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAABECAYAAABQzNPPAAAACXBIWXMAAAsSAAALEgHS3X78AAAJuUlEQVR4nO1d4XUbNwwm+zpANqg3qDaoM0GdCSJPEHcCOxM4GyidQM4ETiaQO4HdCZRMwL7LwyUsDwBBHnnkSfje0x/p7giR95EACIBGoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFGcF2/Ofdc5dIl8/WWu/LizHxhhz77X/15LtKxQcfu2ld5xzr4wxV8aYP40xA3lfMdcOJH4yxnwyxjxYa18qi/cKZGoG59zWGHMRtm+tvWspl0LxnbzOuTvn3NHlY1ezJweNwJPsscWoDe1ivdNCFkVfaLoSg5q6x1aYRMy9X6FYLX5pJTgQ+LE3Ag5ygWawSbi2qaqtOG80WYmdcxdAYNLuNcaMdu/w+eZ9/xsQvxhxQJ7B5nzrTSpj+xwGGW6Hj3NusMv/NsZ8XMBGVyjagrLvRpvTOXclEXC4brCHc+1UsMfvKTm861Cb2Dm3J+7dgaOuGNQmVnSDgBAhbnLkzCEMTACcM+3gXUuR+MDcfwSPchEoiRXdgFm9FtkqgdV3R8jwPEwk4aTAeafheVu4F0ORVVlJrOgGFHmWkA8Ih62ez9yqKd1iguswMh/mEllJrOgCjCqdpUangCFwVANI3ScGj3VRIiuJFV2AeLndEls0CIGP0nZzgj3gntDmziaykljRBShbtLZsSLtHbh8YVu2biBf9AJ5t7jkbhMhZ0WVKYgWFRRMgYBWbrH7W2mpywHbV3vtq2P99ba2d7AHDKjns+6aq95+NMe+ttZ+RZ26QPfE31tqHxP+xeN+dI0A720A8AhfwM8QC/Atjv3hSTjMsvZrAihquhKgKLdhykuAeU5cRX8AxVa1equ+GwBemHw7EPRiqxZiX7Atvd4HaNZHiANrbaYcANyBxaIPfE9dtEbGOQMoJ6UFNviEcZajdK5WF+S/V+45x/jlu4iGu757EBRJvKOxWS+ZIIEdNYEQLV+FnglwYge+kKyWxrUQRObxOPNALkZhajWI+BAzdkhgmYS5QpxTWlybaGYlvgmsm+8CEmhtNfECegwWQ7JHrwglDPMi1ScyEn7pYGCxxT5ckJpyNHJ6hvfFDBfVQmB0jsCg6I7Hf2ZNgEmSlziJw8MyQyNjEwcrFPLsaiQltZETUyUfc1x2JYcw5Eo4m1FWMeOA72MKYxyaF9RC5FxLDbOtj8iIiNuosAnvP9dW0iQqPaAiidmuRGOkrH6LtMOLeHklMxSm4FBMKea6ksAXqFCyB0qmIX8HlTmFDpB9y90jb9RGuzP/bzoHBeud99R7bcsrEtTFmHLALKDn0MZDFd2pdCVIeqwD6gSLbZ2vtdQu5KuId8ehra+3H3GZhe2kg8QfoT2xi/u4MtdZ+aN0Js7DwNsmo6kxmwEB9TN7uEbTvq9VY+49wzVbq3CrddxFPdJL6Rzyjq5WY0TiKyhnz8Jdsqwl6iToKvLDF63MhL0x3WUxMJleyb2AJcgTt5ZCYMvWKe5CJ+IQRolz5FDQrz9MY/kv6qbQooJr7Kn4Re7sU4MWlsrbeFDQtzhKgXlPqefF3oZuStXMAjq2UJApfha31wj55Mt2mJHnULEMLHvNb4udrLHT0xPFHpb/3iQjfrdXeMqjoYeW8jixq/fHIvmuyTCX6LrJHmhRBFjwXQ2/q9AXT5dVTYWviXNXpJfCtvQg/4XmiMfv84dRPtYDihZTWdZ9S2603nIQ6DRklKWrgD9V2eLkrZaD4atMLfJogQuAn2BY7B7wPMtp8fDfJYEEf3qUvQcXT88lU4tCRd9pXKasUJAgig2bP8DNDDSlPdCnZulenvXu5vpDg6IVg7sCU255N7fGOSOzLkW0LMs8P7a/ZGS2VopQclRiSKBuGnhMg5hI51p+7JVXzk7SJgUR3Y8A6com/rVSjs/3tm5ewmLwXVH9XM2Ut4okecSG45qQAkWhvKpk440EEe1i1s8M5u8SCEVtsfDKyUpasDx1u9N8Fv4dtizyjqX2Xka2TrQ4Sz1tLUYASBQFiOK7VaTbBwmGXPiYqc6BSFQu9DF6IyXNzEy9S+i4SMUR9n61WE8+rSWL0PxR47iWMzy4z7TCGYotFMyxpEwfxq5OYVYToJWpDR/OFa6ciCmKiuaylLP8A1VbOs2a0V7vM0yV8boDo47ZUanGBdZfvWZjEIaGw3N5Q7Z5TUjZsL5Z44VKCDBJITDltfvy3iLMrWa2utTISbZHprjXaS5BrI6iQ6mqfpV0dC5MYS/rHSuaEL/1zyosM7YQ21SSJAElIT1LhJX3HkBOTh1IVixXxq7HqcBNQ6bZyESn/s+5Mpg4K5aGzILF6sRE8MFD3yCqEZgEhYZhJ8dGxvotU58Aqn3AFHKiACEo2yjFU3Abk7FTmnm1QYmf8VLNRI36J9arULfaJkUFHBy4S6xwOPlnSFRsghGDJTiSu7yKeaO6Mqey6WsFzqNWxqOoYqxzD3HdF3JI0WWXIS5k26w0MaURibOBRjzBcm1MF8UitrATBcuxOSmXlZnzWURWpOSVWqyPkKrbqCMaGGlfOmVdzn77ZsUXV0CpiC+nMWAnWK+He4QE7CtV7DkbgXA8wRWLqxRatMqXUamYiKbIaCzPVOPOHmqxqboVRY6PqdGbbmGoTtYm8bYURB/guVg1xi7zY2eqbwOvpI7W8zmy1OhLKOMv2RMwRSl7SzxCZBGpUd6EmR3VszWib2j/dCwgpPhWROcS8ytGm2EuSYW/PVqsj+boul8gI+R5NRoBJxOxw0L9FVshaedtdoHUCBEMwNsY14ZBxbPV1kolCILuExNm1s0uo1YLEAvHxJoR/4jjeTx0WP+M/uth7IJA5Vrr2qMEe5eTg9lMnx5VyJGa2mkYUmXmFJJ6rtnJqtcT0iK12I/YwBpfBZwsyUFrB1muL8llIzBwJ9mBGsU4o91NuSRF5DbssLAt2hpKPY3DtiEfve+7+pKARgbwxEs8uMSNQq6OrSEbihRTboJ1szy+jMUmQe4bTutXoET0elM2oP3vvGorE2GpAbjfNlJMjcTHHTETlFHlyCxP5SITMUnu/0qywTaKzsKj8q0Wvp917Z9T6s+yN9ztF4tBrva2VO8ptMVVoi1OrpSS5KEAS0tnE7P0mTWjIuJfE7qRyiU3HJPbhnR7x4+VhSDy5tqJcWN9VOairhFrtPesyg8x7oVqMIWvf1/NtzCX0Ixc7UAN2qYbWDHihxpdjOKPo9bn3SSrgpb6E4um/I0X7vkCljYfWBelA1o1XUJGqFT3I+c9YUO8Ma3avByn7xArF0tC60wrFynEqdadrwz+yVc8pUigUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVC0QbGmP8AFK6o62ZCFUMAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
};

export const IconCheck = ({ completed }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Circle cx="12" cy="12" r="12" fill={completed ? "#00F4BF" : "#fff"} />
      <Path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const IconPencil = () => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="16" cy="16" r="15.5" stroke="#021123" />
      <Path
        d="M24.7188 11.0312L22.8906 12.8594L19.1406 9.10938L20.9688 7.28125C21.1562 7.09375 21.3906 7 21.6719 7C21.9531 7 22.1875 7.09375 22.375 7.28125L24.7188 9.625C24.9062 9.8125 25 10.0469 25 10.3281C25 10.6094 24.9062 10.8438 24.7188 11.0312ZM7 21.25L18.0625 10.1875L21.8125 13.9375L10.75 25H7V21.25Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const PlusIcon = () => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.5156 12.9844V11.0156H13.4844V6.98438H11.5156V11.0156H7.48438V12.9844H11.5156V17.0156H13.4844V12.9844H17.5156ZM5.42188 4.96875C7.39062 3 9.75 2.01562 12.5 2.01562C15.25 2.01562 17.5938 3 19.5312 4.96875C21.5 6.90625 22.4844 9.25 22.4844 12C22.4844 14.75 21.5 17.1094 19.5312 19.0781C17.5938 21.0156 15.25 21.9844 12.5 21.9844C9.75 21.9844 7.39062 21.0156 5.42188 19.0781C3.48438 17.1094 2.51562 14.75 2.51562 12C2.51562 9.25 3.48438 6.90625 5.42188 4.96875Z"
        fill="#B872FF"
      />
    </Svg>
  );
};

export const ArrowBack = ({ style }) => {
  return (
    <Svg
      width="22"
      height="22"
      style={style}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.6875 9.6875V12.3125H5.4375L12.875 19.8125L11 21.6875L0.3125 11L11 0.3125L12.875 2.1875L5.4375 9.6875H21.6875Z"
        fill="white"
      />
    </Svg>
  );
};

export const IconSave = () => {
  return (
    <Svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 4V1.34375H1.34375V4H8ZM4.59375 10.0625C4.98958 10.4583 5.45833 10.6562 6 10.6562C6.54167 10.6562 7.01042 10.4583 7.40625 10.0625C7.80208 9.66667 8 9.19792 8 8.65625C8 8.11458 7.80208 7.64583 7.40625 7.25C7.01042 6.85417 6.54167 6.65625 6 6.65625C5.45833 6.65625 4.98958 6.85417 4.59375 7.25C4.19792 7.64583 4 8.11458 4 8.65625C4 9.19792 4.19792 9.66667 4.59375 10.0625ZM9.34375 0L12 2.65625V10.6562C12 11.0104 11.8646 11.3229 11.5938 11.5938C11.3229 11.8646 11.0104 12 10.6562 12H1.34375C0.96875 12 0.645833 11.875 0.375 11.625C0.125 11.3542 0 11.0312 0 10.6562V1.34375C0 0.96875 0.125 0.65625 0.375 0.40625C0.645833 0.135417 0.96875 0 1.34375 0H9.34375Z"
        fill="#021123"
      />
    </Svg>
  );
};

export const IconDelete = () => {
  return (
    <Svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M7.34375 0.65625H9.65625V2H0.34375V0.65625H2.65625L3.34375 0H6.65625L7.34375 0.65625ZM2.34375 4V10.6562H7.65625V4H2.34375ZM1 10.6562V2.65625H9V10.6562C9 11.0104 8.86458 11.3229 8.59375 11.5938C8.32292 11.8646 8.01042 12 7.65625 12H2.34375C1.98958 12 1.67708 11.8646 1.40625 11.5938C1.13542 11.3229 1 11.0104 1 10.6562Z"
        fill="#021123"
      />
    </Svg>
  );
};

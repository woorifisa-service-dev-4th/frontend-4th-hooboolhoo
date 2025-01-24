// 값 변경 시에 tsconfig.json 파일의
// safelist 값도 변경해주어야 합니다.

const yellow = "#FFCC00";
const brown = "#432616";

const tail = {
  w: 16, // 호랑이 꼬리  너비
  h: 24, // 호랑이 꼬리 직사각형 높이, 호랑이 꼬리 원 종류(사분원, 반원) 높이 & 너비
};

export const TIGER_TAIL_CSS = {
  tail_brown_row: `bg-[${brown}] w-[${tail.w}] h-[${tail.h}]`,
  tail_yellow_row: `bg-[${yellow}] w-[${tail.w}] h-[${tail.h}]`,
  tail_brown_col: `bg-[${brown}] w-[${tail.h}] h-[${tail.w}]`,
  tail_yellow_col: `bg-[${yellow}] w-[${tail.h}] h-[${tail.w}]`,
  tail_circle: `w-[${tail.h}] h-[${tail.h}] bg-[${yellow}]`,
};

const frame = {
  w: 250, // 호랑이 전체 너비
  h: 200, // 호랑이 전체 높이
};

const belly = {
  w: 230, // 호랑이 배 너비
  h: 180, // 호랑이 배 높이
};

const line = {
  frame: {
    w: 200,
  },
  long: {
    w: 10, // 호랑이 긴 줄무늬 너비
    h: 70, // 호랑이 긴 줄무늬 높이
  },

  short: {
    w: 10, // 호랑이 짧은 줄무늬 너비
    h: 10, // 호랑이 짧은 줄무늬 높이
  },
};

export const TIGER_BODY_CSS = {
  body_frame: `bg-[${yellow}] w-[${frame.w}] h-[${frame.h}] rounded-xl`,
  body_back_frame: `grid justify-between absolute top-0 left-[${
    (frame.w - line.frame.w) / 2
  }] w-[${frame.w}] h-[${frame.h}]`,
  body_line_frame: `w-[${line.frame.w}] flex justify-between`,
  body_line_long: `w-[${line.long.w}] h-[${line.long.h}] bg-[${brown}]`,
  body_line_short: `w-[${line.short.w}] h-[${line.short.h}] bg-[${brown}]`,
  body_belly: `absolute top-[${(frame.w - belly.w) / 2}] left-[${
    (frame.h - belly.h) / 2
  }] w-[${belly.w}] h-[${belly.h}] bg-white rounded-xl`,
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // makerButton의 애니매이션 효과
      animation: {
        vibrate: "vibrate 0.2s linear infinite",
      },
      keyframes: {
        vibrate: {
          "0%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(2px)" },
          "100%": { transform: "translateY(-2px)" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    /* Colors */
    "bg-[#432616]",
    "bg-[#FFCC00]",

    /* Tail 
      w: 16 // 꼬리 직사각형 너비
      h: 24 // 꼬리 직사각형 높이
    */
    "w-[16]",
    "w-[24]",
    "h-[24]",
    "h-[16]",

    /* Body
     */
    "w-[250]", // 호랑이 전체 너비
    "h-[200]", // 호랑이 전체 높이
    "w-[200]", // 줄무늬 공간의 너비

    // (호랑이 전체 너비 - 줄무늬 공간 너비) / 2로 계산합니다.
    "left-[25]", // 줄무늬 공간의 좌측 padding

    "w-[10]", // 줄무늬 너비
    "h-[70]", // 긴 줄무늬 높이
    "h-[10]", // 짧은 줄무늬 높이

    // (호랑이 전체 높이 - 배 높이) / 2로 계산합니다.
    "top-[10]", // 호랑이 배 부분 상단 padding

    // (호랑이 전체 너비 - 배 너비) / 2로 계산합니다.
    "left-[10]", // 호랑이 배 부분 좌측 padding
    "w-[230]", // 호랑이 배 너비
    "h-[180]", // 호랑이 배 높이
  ],
};

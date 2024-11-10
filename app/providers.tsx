"use client";

import { ThemeProvider } from "@/src/common/themeProvider/themeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute={"class"}
        defaultTheme={"system"}
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;

"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/src/common/themeProvider/themeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Toaster/>
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

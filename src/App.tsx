import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant={"gradient"}>Click me</Button>
      </div>



    </ThemeProvider>
  );
}

export default App;

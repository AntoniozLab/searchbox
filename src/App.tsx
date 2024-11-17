import "./App.css";
import { Home } from "./pages/Home.page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => {
          return (
            <div>
              <h1>Hubo un error</h1>
              <button onClick={() => resetErrorBoundary()}>Try again</button>
            </div>
          );
        }}
      >
        <Home />
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;

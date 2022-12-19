import SearchBar from "./components/SearchBar";
import CurrentTask from "./components/CurrentTask";
import CompletedTask from "./components/CompletedTask";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <div className="bg-slate-100 p-5 w-8/12 h-100">
          <SearchBar />
          <div className="flex items-center gap-3 w-full mt-5">
            <CurrentTask />
            <CompletedTask />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

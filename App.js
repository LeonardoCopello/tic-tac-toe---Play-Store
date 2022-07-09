import { StatusBar } from "expo-status-bar";
import Route from "./route/Route";
import DataProvider from "./context/dataContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <DataProvider>
        <Route />
      </DataProvider>
    </>
  );
}

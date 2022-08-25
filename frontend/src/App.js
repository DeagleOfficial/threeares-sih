import Router from './routes';
import ThemeProvider from './theme';
import './App.css';




export default function App() {


  return (
    <ThemeProvider>

      <Router />
    </ThemeProvider>
  );
}

import './App.css';

const date: Date = new Date();
const currentTime: string = date.toTimeString();

type AppProps = {
  time: string;
};

const App = ({ time = currentTime }: AppProps) => <p>Current Time: {time}</p>;

export default App;

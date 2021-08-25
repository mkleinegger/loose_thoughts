import './App.css';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

function App() {
  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div className="App">
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
      </Drawer>
    </div>
  );
}

export default App;

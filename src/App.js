import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import Interlocutorios from './components/Interlocutorios';

function App() {

  return (
    <>
      <Nav/>
      <section className="d-flex flex-wrap gap-3 shadow rounded border p-3 m-4">
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
        <Card alt="ninguna" title="PENDIENTES" text="Expedientes pendientes de resolver" buttonText="Resolver" />
      </section>
      <Interlocutorios/>
    </>
  );
}

export default App;

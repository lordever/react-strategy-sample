import React, { useState } from 'react';
import Strategy3Component from "./strategy/strategy3.component";
import Strategy1Component from "./strategy/strategy1.component";
import Strategy2Component from "./strategy/strategy2.component";

// Strategy interface
interface RenderStrategy {
  render(): JSX.Element;
}

// Simple component strategy
class Scenario1Component implements RenderStrategy {
  render() {
    return <Strategy1Component />;
  }
}

// Advanced component strategy
class Scenario2Component implements RenderStrategy {
  render() {
    return <Strategy2Component />;
  }
}

// Scenario 3 component strategy
class Scenario3Component implements RenderStrategy {
  render() {
    return <Strategy3Component />;
  }
}

// Main component that uses the selected strategy
const RenderComponent: React.FC<{ strategy: RenderStrategy }> = ({ strategy }) => {
  return <div>{strategy.render()}</div>;
};

const App: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number>(1);

  const handleScenarioChange = (scenarioNumber: number) => {
    setSelectedScenario(scenarioNumber);
  };

  let selectedStrategy;

  switch (selectedScenario) {
    case 1:
      selectedStrategy = new Scenario1Component();
      break;
    case 2:
      selectedStrategy = new Scenario2Component();
      break;
    case 3:
      selectedStrategy = new Scenario3Component();
      break;
    default:
      selectedStrategy = new Scenario1Component();
  }

  return (
      <div>
        <h1>Strategy Pattern Example</h1>
        <div>
          <button onClick={() => handleScenarioChange(1)}>Scenario 1</button>
          <button onClick={() => handleScenarioChange(2)}>Scenario 2</button>
          <button onClick={() => handleScenarioChange(3)}>Scenario 3</button>
        </div>
        <RenderComponent strategy={selectedStrategy} />
      </div>
  );
};

export default App;
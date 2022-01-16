import React, { lazy, Suspense } from 'react';
import './App.css';
// import Home from './pages/Home';

const HomeComponent = lazy(() => import('./pages/Home'));
const SearchComponent = lazy(() => import('./components/Search'));


const renderLoader = () => <p>Carregando...</p>;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Falha ao carregar. Por favor atualize a página</p>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={renderLoader()}>
        <HomeComponent />   
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

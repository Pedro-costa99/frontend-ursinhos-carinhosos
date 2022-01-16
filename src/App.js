import React, { lazy, Suspense } from 'react';

const HomeComponent = lazy(() => import('./pages/Home'));



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

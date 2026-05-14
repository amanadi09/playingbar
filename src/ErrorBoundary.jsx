import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled React error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-10">
          <div className="max-w-xl rounded-[2rem] border border-rose-500/20 bg-slate-900/95 p-10 shadow-[0_0_60px_rgba(220,38,38,0.15)]">
            <h1 className="text-3xl font-bold text-rose-300">Something went wrong</h1>
            <p className="mt-4 text-slate-300">The page could not load correctly. Please refresh or try again later.</p>
            <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm text-slate-200/80">{this.state.error?.message}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

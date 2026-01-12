import React from "react";

class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean }
> {
    state = { hasError: false, error: '' };

    static getDerivedStateFromError(error: Error) {

        return { hasError: true, error: error.message };
    }

    render() {
        if (this.state.hasError) {
            const error =this.state.error
            return <h2>Something went wrong <br/> We found the error as {error} </h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary
export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid red',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <h2>Oops! Something went wrong.</h2>
      <p style={{ color: 'red' }}>{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Try Again
      </button>
    </div>
  );
}

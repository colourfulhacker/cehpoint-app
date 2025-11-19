const Loading = ({ message = 'Loading...' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      minHeight: '200px'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid rgba(138, 43, 226, 0.2)',
        borderTop: '4px solid #8A2BE2',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{
        marginTop: '1rem',
        color: '#B8A9D9',
        fontSize: '0.9rem'
      }}>
        {message}
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default Loading

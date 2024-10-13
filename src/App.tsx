import Todo from '@/components/Todo'

function App() {
  return (
    <div className="wrapper">
      <div className="logo">
        <div className="logo-wrapper">
          <img
            src="./react.svg"
            alt="React logo"
          />
        </div>
      </div>

      <Todo />
    </div>
  )
}

export default App

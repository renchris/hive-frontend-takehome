import './App.css'
import Dropdown from './Dropdown'

const App = () => (
  <div className="App">
    <header className="App-header" style={{ maxWidth: '1000px', margin: 'auto' }}>
      <p style={{ color: 'black', marginTop: '20vh' }}>
        Hive Frontend Engineer Challenge
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
      }}
      >
        <Dropdown
          placeholderText="Multi"
          optionTitleList={['Item-1', 'Item-2', 'Item-3', 'Item-4', 'Item-5']}
          variant="multi"
        />
        <Dropdown
          placeholderText="Single"
          optionTitleList={['Item-6', 'Item-7', 'Item-8', 'Item-9', 'Item-10']}
          variant="single"
        />
      </div>
      <p style={{ color: 'black' }}>
        Dropdown Reuseable Component
      </p>
    </header>
  </div>
)

export default App

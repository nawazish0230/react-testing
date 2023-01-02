import './App.css'
import Greet from './components/greet/greet'
import Application from './components/application/application'
import Skills from './components/skills/skills'
import Counter from './components/counter/counter'
import { AppProviders } from './providers/app-provider'
import { MuiMode } from './components/mui/mui-mode'

function App() {
  const skills = ['HTML', 'css', 'js']

  return (
    <AppProviders>
      <div className="App">
        <Greet name="Nawazish" />
        <Application />

        <Skills skills={skills} />

        <Counter />

        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App

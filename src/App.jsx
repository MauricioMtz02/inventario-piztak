import { AuthProvider, DarkModeProvider } from "./context"
import { AppRouter } from "./routes"

function App() {
  return (
    <DarkModeProvider>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </DarkModeProvider>
  )
}

export default App
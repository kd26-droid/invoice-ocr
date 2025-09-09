import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { InvoiceDetail } from './pages/InvoiceDetail'
import { Upload } from './pages/Upload'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/invoices/:id" element={<InvoiceDetail />} />
      </Routes>
    </div>
  )
}

export default App
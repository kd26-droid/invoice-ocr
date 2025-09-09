import { useParams } from 'react-router-dom'

export function InvoiceDetail() {
  const { id } = useParams<{ id: string }>()
  
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoice #{id}</h1>
          <p className="text-muted-foreground">
            Invoice details and OCR results
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Document</h2>
            <div className="border rounded-lg p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground">Document preview will appear here</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Extracted Data</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Vendor Name</label>
                <p className="text-sm text-muted-foreground">Not extracted yet</p>
              </div>
              <div>
                <label className="text-sm font-medium">Invoice Number</label>
                <p className="text-sm text-muted-foreground">Not extracted yet</p>
              </div>
              <div>
                <label className="text-sm font-medium">Total Amount</label>
                <p className="text-sm text-muted-foreground">Not extracted yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
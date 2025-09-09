export function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your invoice OCR dashboard
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-medium">Total Invoices</h3>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                No invoices uploaded yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
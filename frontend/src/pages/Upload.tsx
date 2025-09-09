export function Upload() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Invoice</h1>
          <p className="text-muted-foreground">
            Upload your invoices for OCR processing
          </p>
        </div>
        
        <div className="max-w-md">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
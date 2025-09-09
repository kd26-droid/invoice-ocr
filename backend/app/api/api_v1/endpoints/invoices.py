from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def list_invoices():
    return {"message": "List invoices endpoint - to be implemented"}


@router.post("/")
async def create_invoice():
    return {"message": "Create invoice endpoint - to be implemented"}


@router.get("/{invoice_id}")
async def get_invoice(invoice_id: int):
    return {"message": f"Get invoice {invoice_id} endpoint - to be implemented"}


@router.post("/upload")
async def upload_invoice():
    return {"message": "Upload invoice endpoint - to be implemented"}


@router.post("/{invoice_id}/process")
async def process_invoice(invoice_id: int):
    return {"message": f"Process invoice {invoice_id} endpoint - to be implemented"}
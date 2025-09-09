from fastapi import APIRouter

router = APIRouter()


@router.get("/me")
async def get_current_user():
    return {"message": "Get current user endpoint - to be implemented"}


@router.put("/me")
async def update_current_user():
    return {"message": "Update current user endpoint - to be implemented"}
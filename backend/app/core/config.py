import secrets
from typing import List, Optional, Union
from pydantic import AnyHttpUrl, BaseSettings, validator


class Settings(BaseSettings):
    PROJECT_NAME: str = "Invoice OCR API"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"
    
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    
    # CORS
    ALLOWED_HOSTS: List[str] = ["*"]
    
    @validator("ALLOWED_HOSTS", pre=True)
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)
    
    # Database
    DATABASE_URL: Optional[str] = None
    
    # Azure Storage
    AZURE_STORAGE_CONNECTION_STRING: Optional[str] = None
    AZURE_STORAGE_CONTAINER_NAME: str = "invoices"
    
    # Azure Document Intelligence
    DOCINT_ENDPOINT: Optional[str] = None
    DOCINT_KEY: Optional[str] = None
    
    # JWT
    JWT_SECRET: str = SECRET_KEY
    JWT_ALGORITHM: str = "HS256"
    
    class Config:
        case_sensitive = True
        env_file = ".env"


settings = Settings()
# Invoice OCR System

A complete invoice processing system with OCR capabilities using FastAPI, React, and Azure services.

## Tech Stack

### Backend
- **FastAPI** - High-performance async API framework
- **SQLAlchemy 2.0 + Alembic** - Database ORM and migrations
- **Pydantic v2** - Data validation and serialization
- **PostgreSQL** - Primary database
- **JWT Authentication** - Secure user authentication
- **Azure Document Intelligence** - OCR processing
- **Azure Blob Storage** - File storage

### Frontend
- **React 18 + TypeScript** - Modern React with type safety
- **Vite** - Fast build tool and dev server
- **shadcn/ui + Tailwind CSS** - Beautiful, customizable UI components
- **TanStack Query** - Server state management
- **Zustand** - Client state management
- **React Router** - Routing
- **ReactFlow** - Approval workflow designer
- **TanStack Table** - Advanced data tables
- **Chart.js** - Data visualization

### Azure Services
- **Azure App Service** - Hosting (Linux containers)
- **Azure Container Registry** - Docker image storage
- **Azure Database for PostgreSQL** - Managed database
- **Azure Blob Storage** - File storage
- **Azure Document Intelligence** - OCR processing
- **Azure Application Insights** - Monitoring and logging

## Project Structure

```
invoice-ocr/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Core configuration
│   │   ├── db/             # Database configuration
│   │   ├── models/         # SQLAlchemy models
│   │   ├── schemas/        # Pydantic schemas
│   │   └── services/       # Business logic
│   ├── alembic/            # Database migrations
│   └── Dockerfile          # Backend container
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities
│   │   ├── services/       # API services
│   │   ├── store/          # State management
│   │   └── types/          # TypeScript types
│   └── Dockerfile          # Frontend container
├── infra/                  # Infrastructure config
│   └── nginx.conf          # Nginx configuration
└── .github/workflows/      # CI/CD workflows
```

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 20+
- Docker
- Azure CLI (for deployment)

### Local Development

1. **Backend Setup**
   ```bash
   cd backend
   pip install poetry
   poetry install
   poetry shell
   
   # Copy environment template
   cp .env.example .env
   # Edit .env with your configuration
   
   # Run migrations
   alembic upgrade head
   
   # Start development server
   uvicorn app.main:app --reload
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   corepack enable
   pnpm install
   
   # Start development server
   pnpm dev
   ```

3. **Access the Application**
   - Backend API: http://localhost:8000
   - Frontend: http://localhost:5173
   - API Documentation: http://localhost:8000/docs

### Environment Variables

#### Backend (.env)
```env
DATABASE_URL=postgresql://username:password@localhost/invoice_ocr
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;...
AZURE_STORAGE_CONTAINER_NAME=invoices
DOCINT_ENDPOINT=https://your-region.cognitiveservices.azure.com/
DOCINT_KEY=your-document-intelligence-key
JWT_SECRET=your-jwt-secret-key
ALLOWED_ORIGINS=http://localhost:5173,https://your-frontend-domain.azurewebsites.net
```

#### Frontend (.env.local)
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

## Docker Deployment

### Build Images
```bash
# Backend
docker build -f backend/Dockerfile -t invoice-ocr-backend .

# Frontend
docker build -f frontend/Dockerfile -t invoice-ocr-frontend .
```

### Run with Docker Compose
```bash
docker-compose up -d
```

## Azure Deployment

### 1. Create Azure Resources
```bash
# Create resource group
az group create --name invoice-ocr-rg --location eastus

# Create Container Registry
az acr create --resource-group invoice-ocr-rg --name invoiceocrregistry --sku Basic

# Create App Service Plan
az appservice plan create --name invoice-ocr-plan --resource-group invoice-ocr-rg --is-linux --sku B1

# Create Web Apps
az webapp create --resource-group invoice-ocr-rg --plan invoice-ocr-plan --name invoice-ocr-backend --deployment-container-image-name invoiceocrregistry.azurecr.io/backend:latest
az webapp create --resource-group invoice-ocr-rg --plan invoice-ocr-plan --name invoice-ocr-frontend --deployment-container-image-name invoiceocrregistry.azurecr.io/frontend:latest

# Create PostgreSQL database
az postgres flexible-server create --resource-group invoice-ocr-rg --name invoice-ocr-db --admin-user dbadmin --admin-password your-secure-password --sku-name Standard_B1ms

# Create storage account
az storage account create --name invoiceocrstore --resource-group invoice-ocr-rg --location eastus --sku Standard_LRS
```

### 2. Configure App Settings
Set environment variables in Azure App Service configuration.

### 3. Set up CI/CD
The GitHub Actions workflows in `.github/workflows/` will automatically build and deploy on pushes to main.

## Features

- **Document Upload** - Drag & drop interface with progress tracking
- **OCR Processing** - Automatic text extraction from invoices
- **Data Extraction** - Vendor, amount, date, and invoice number extraction
- **Approval Workflows** - Visual workflow designer with ReactFlow
- **Dashboard** - Analytics and invoice status overview
- **User Management** - JWT-based authentication and authorization
- **File Management** - Secure Azure Blob Storage integration

## API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/refresh` - Refresh token

### Invoices
- `GET /api/v1/invoices/` - List invoices
- `POST /api/v1/invoices/` - Create invoice
- `GET /api/v1/invoices/{id}` - Get invoice details
- `POST /api/v1/invoices/upload` - Upload invoice file
- `POST /api/v1/invoices/{id}/process` - Process invoice with OCR

### Users
- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/me` - Update current user

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

MIT License
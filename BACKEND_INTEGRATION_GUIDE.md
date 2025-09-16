# راهنمای یکپارچه‌سازی بک‌اند - Backend Integration Guide

## بررسی کدبیس و شناسایی کامپوننت‌ها

پس از اسکن کامل کدبیس، کامپوننت‌ها و بخش‌هایی که نیاز به اتصال به بک‌اند دارند شناسایی شدند:

### کامپوننت‌های شناسایی شده:

1. **Banner Component** - داده‌های پروفایل کاربر
2. **Portfolio Component** - پروژه‌ها و نمونه کارها
3. **Skills Component** - مهارت‌ها و تخصص‌ها
4. **Experience Component** - تجربیات کاری
5. **Education Component** - تحصیلات
6. **Certifications Component** - گواهینامه‌ها
7. **Services Component** - خدمات حرفه‌ای
8. **Contact Component** - فرم تماس و پیام‌رسانی
9. **About Component** - اطلاعات شخصی

## ساختار API و کانفیگ‌ها

### 1. فایل‌های کانفیگ ایجاد شده:

- `src/config/api.js` - تنظیمات اصلی API
- `src/services/apiService.js` - سرویس اصلی API
- `src/hooks/useApi.js` - هوک‌های سفارشی React
- `src/services/portfolioService.js` - سرویس پورتفولیو
- `src/services/profileService.js` - سرویس پروفایل
- `src/services/skillsService.js` - سرویس مهارت‌ها
- `src/services/contactService.js` - سرویس تماس
- `src/services/servicesService.js` - سرویس خدمات

### 2. کامپوننت‌های یکپارچه با بک‌اند:

- `src/components/BackendIntegration/BackendBanner.jsx`
- `src/components/BackendIntegration/BackendPortfolio.jsx`
- `src/components/BackendIntegration/BackendContact.jsx`

## ساختار درخواست‌های API

### GET Requests (دریافت داده):

```javascript
// دریافت پروفایل کاربر
GET /api/v1/profile

// دریافت پروژه‌ها
GET /api/v1/portfolio

// دریافت مهارت‌ها
GET /api/v1/skills

// دریافت تجربیات
GET /api/v1/experience

// دریافت تحصیلات
GET /api/v1/education

// دریافت گواهینامه‌ها
GET /api/v1/certifications

// دریافت خدمات
GET /api/v1/services
```

### POST Requests (ایجاد داده):

```javascript
// ایجاد پروژه جدید
POST /api/v1/projects
{
  "title": "Project Title",
  "description": "Project Description",
  "link": "https://project-link.com",
  "repo": "https://github.com/user/repo",
  "tags": ["React", "Node.js"],
  "image": "project-image.jpg"
}

// ارسال پیام تماس
POST /api/v1/contact
{
  "name": "User Name",
  "email": "user@example.com",
  "subject": "Subject",
  "message": "Message content",
  "phone": "+989123456789"
}

// ایجاد مهارت جدید
POST /api/v1/skills
{
  "name": "Skill Name",
  "proficiency": 85,
  "category": "Web Development",
  "image": "skill-icon.png"
}
```

### PUT Requests (به‌روزرسانی داده):

```javascript
// به‌روزرسانی پروفایل
PUT /api/v1/profile
{
  "name": "Updated Name",
  "jobTitle": "Updated Job Title",
  "socialLinks": [...]
}

// به‌روزرسانی پروژه
PUT /api/v1/projects/{id}
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```

### DELETE Requests (حذف داده):

```javascript
// حذف پروژه
DELETE /api/v1/projects/{id}

// حذف مهارت
DELETE /api/v1/skills/{id}

// حذف تجربه
DELETE /api/v1/experience/{id}
```

## نحوه استفاده از هوک‌ها

### 1. استفاده از useGet:

```javascript
import { useGet } from '../hooks/useApi.js';

function MyComponent() {
  const { data, loading, error, refetch } = useGet('/portfolio');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {data?.projects?.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
```

### 2. استفاده از usePost:

```javascript
import { usePost } from '../hooks/useApi.js';

function ContactForm() {
  const { post, loading, error } = usePost('/contact');
  
  const handleSubmit = async (formData) => {
    try {
      await post(formData);
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

### 3. استفاده از usePut:

```javascript
import { usePut } from '../hooks/useApi.js';

function EditProject({ projectId }) {
  const { put, loading, error } = usePut(`/projects/${projectId}`);
  
  const handleUpdate = async (updatedData) => {
    try {
      await put(updatedData);
      console.log('Project updated successfully');
    } catch (error) {
      console.error('Failed to update project:', error);
    }
  };
  
  return (
    <div>
      {/* Edit form */}
    </div>
  );
}
```

## تنظیمات محیطی

### فایل .env:

```env
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_API_VERSION=v1
REACT_APP_API_TIMEOUT=10000
REACT_APP_AUTH_TOKEN_KEY=auth_token
REACT_APP_REFRESH_TOKEN_KEY=refresh_token
```

## نکات مهم پیاده‌سازی

### 1. مدیریت خطا:

```javascript
// در کامپوننت‌ها
if (error) {
  console.warn('Failed to load data from backend, using fallback:', error);
  // استفاده از داده‌های fallback
}
```

### 2. حالت Loading:

```javascript
if (loading) {
  return (
    <div className="animate-pulse">
      {/* Loading skeleton */}
    </div>
  );
}
```

### 3. مدیریت Authentication:

```javascript
// در apiService.js
getHeaders(customHeaders = {}) {
  const token = this.getAuthToken();
  const headers = { ...this.defaultHeaders, ...customHeaders };
  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  return headers;
}
```

### 4. Upload فایل:

```javascript
// استفاده از useFileUpload
const { upload, loading, error } = useFileUpload('/upload');

const handleFileUpload = async (file) => {
  try {
    const result = await upload(file);
    console.log('File uploaded:', result);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

## ساختار دیتابیس پیشنهادی

### جداول اصلی:

1. **users** - اطلاعات کاربران
2. **projects** - پروژه‌ها
3. **skills** - مهارت‌ها
4. **experience** - تجربیات
5. **education** - تحصیلات
6. **certifications** - گواهینامه‌ها
7. **services** - خدمات
8. **messages** - پیام‌های تماس
9. **settings** - تنظیمات

## مراحل پیاده‌سازی

### مرحله 1: تنظیم بک‌اند
1. ایجاد سرور API (Node.js/Express یا Python/FastAPI)
2. تنظیم دیتابیس
3. پیاده‌سازی endpointها

### مرحله 2: یکپارچه‌سازی فرانت‌اند
1. نصب وابستگی‌ها
2. کپی فایل‌های کانفیگ
3. جایگزینی کامپوننت‌ها

### مرحله 3: تست و بهینه‌سازی
1. تست API endpoints
2. تست کامپوننت‌ها
3. بهینه‌سازی عملکرد

## وابستگی‌های مورد نیاز

```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "react-query": "^3.39.0"
  }
}
```

## مثال کامل استفاده

```javascript
// App.jsx
import BackendBanner from './components/BackendIntegration/BackendBanner';
import BackendPortfolio from './components/BackendIntegration/BackendPortfolio';
import BackendContact from './components/BackendIntegration/BackendContact';

function App() {
  return (
    <div>
      <BackendBanner />
      <BackendPortfolio />
      <BackendContact />
    </div>
  );
}
```

این راهنما تمام جنبه‌های لازم برای یکپارچه‌سازی بک‌اند را پوشش می‌دهد و آماده پیاده‌سازی است.

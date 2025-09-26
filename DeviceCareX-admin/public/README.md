# DeviceCareX Admin App

A fully dynamic admin interface for managing content on a Laptop & Mobile Repairing Shop website. Non-technical shop managers can add, update, or delete services, contact info, about sections, and branding through a clean browser interface.

## App Overview

This Admin App allows users to manage website content without coding. Data is stored in the browser's localStorage (or can be adapted to JSON files). The app dynamically renders content for both admin preview and public-facing user apps.

## Features

- **Dashboard**: Overview of services count, last updated date, and contact info.
- **Services Management**: CRUD operations for services including image uploads, pricing, and WhatsApp integration.
- **Contact Management**: Edit WhatsApp, phone, email, and Google Maps embed.
- **About Section**: Manage shop history, team expertise, and dynamic "Why Choose Us" bullets.
- **Settings**: Upload logo, set shop name, tagline, and banner image.
- **Validation**: Client-side validation for all forms.
- **Responsive Design**: Works on desktop and mobile.

## Folder Structure

```
repair-shop-admin/
├── index.html                  # Dashboard
├── services.html               # Manage services
├── about.html                  # Manage about section
├── contact.html                # Manage contact info
├── settings.html               # Manage branding
├── data/
│   ├── services.json           # Services data (initially empty)
│   ├── contact.json            # Contact data
│   ├── about.json              # About data
│   └── settings.json           # Settings data
├── assets/
│   ├── css/
│   │   └── admin-style.css     # Layout and styles
│   ├── js/
│   │   ├── admin-app.js        # Core logic
│   │   └── form-validation.js  # Validation helpers
│   ├── images/                 # Uploaded images
│   └── icons/                  # Icons
├── docs/
│   └── RepairShop_Admin_Project.adoc  # Internal docs
└── README.md
```

## How to Run Locally

1. Open `repair-shop-admin/index.html` in a modern web browser (Chrome, Firefox, etc.).
2. No server required - runs entirely in the browser.
3. Data persists in localStorage across sessions.

## JSON Format Examples

### services.json
```json
[
  {
    "image": "data:image/png;base64,...",
    "name": "iPhone Screen Replacement",
    "type": "Mobile",
    "price": "120",
    "whatsapp": "Hi, I'm interested in iPhone screen repair."
  }
]
```

### contact.json
```json
{
  "whatsapp": "+911234567890",
  "phone": "+911234567890",
  "email": "info@shop.com",
  "maps": "https://maps.google.com/embed?..."
}
```

### about.json
```json
{
  "history": "Founded in 2020...",
  "team": "Experienced technicians...",
  "bullets": ["Fast service", "Quality parts", "Affordable prices"]
}
```

### settings.json
```json
{
  "name": "DeviceCareX",
  "tagline": "Your Trusted Repair Shop",
  "logo": "data:image/png;base64,...",
  "banner": "data:image/png;base64,..."
}
```

## Notes for Team/Interns

- All content is dynamic; no hardcoded HTML.
- Images are stored as base64 data URLs in localStorage.
- For production, migrate to a backend with database (e.g., Firebase, MongoDB).
- Extend by adding more sections or integrating with CMS APIs.
- Ensure browser compatibility; test on multiple devices.

## Future Enhancements

- Export data to JSON files for backup.
- Import from JSON files.
- User authentication.
- Real-time sync with user-facing app.
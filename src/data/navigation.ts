export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Company Setup",
    items: [
      { title: "Company Settings", href: "/company-setup/company-settings" },
      { title: "Manage Users", href: "/company-setup/manage-users" },
      { title: "Manage Lists", href: "/company-setup/manage-lists" },
      { title: "Integrations", href: "/company-setup/integrations" },
    ],
  },
  {
    title: "Work Orders",
    items: [
      { title: "Create Orders", href: "/work-orders/create-orders" },
      { title: "Complete & Closed", href: "/work-orders/complete-closed" },
      { title: "Recurrent", href: "/work-orders/recurrent" },
      { title: "Service Request", href: "/work-orders/service-request" },
    ],
  },
  {
    title: "Invoice & Payments",
    items: [
      { title: "Invoices", href: "/invoice-payments/invoices" },
      { title: "Payments", href: "/invoice-payments/payments" },
    ],
  },
  {
    title: "Mobile App",
    items: [
      { title: "Overview", href: "/mobile-app/overview" },
      { title: "Work Orders", href: "/mobile-app/work-orders" },
      { title: "Estimates", href: "/mobile-app/estimates" },
    ],
  },
  {
    title: "Dispatch",
    items: [
      { title: "Dispatch Overview", href: "/dispatch/dispatch-overview" },
      { title: "Smart Dispatch", href: "/dispatch/smart-dispatch" },
      { title: "GPS Tracking", href: "/dispatch/gps-tracking" },
    ],
  },
  {
    title: "Estimates",
    items: [
      { title: "Create Estimate", href: "/estimates/create-estimate" },
      { title: "Online Approval", href: "/estimates/online-approval" },
      { title: "Convert to Work Order", href: "/estimates/convert-to-work-order" },
    ],
  },
  {
    title: "CRM",
    items: [
      { title: "Customer Portal", href: "/crm/customer-portal" },
      { title: "Customer History", href: "/crm/customer-history" },
    ],
  },
  {
    title: "Dashboard & Reports",
    items: [
      { title: "Dashboard", href: "/dashboard-reports/dashboard" },
      { title: "Reports", href: "/dashboard-reports/reports" },
    ],
  },
  {
    title: "Timekeeping",
    items: [
      { title: "Overview & Setup", href: "/timekeeping/overview-setup" },
      { title: "For Service Providers", href: "/timekeeping/for-service-providers" },
      { title: "For Administrators", href: "/timekeeping/for-administrators" },
    ],
  },
  {
    title: "Notifications",
    items: [
      { title: "For Customers", href: "/notifications/for-customers" },
      { title: "For Service Providers", href: "/notifications/for-service-providers" },
      { title: "For Administrators", href: "/notifications/for-administrators" },
    ],
  },
  {
    title: "Auxiliary Modules",
    items: [
      { title: "Job Costing", href: "/auxiliary-modules/job-costing" },
      { title: "Equipment Tracking", href: "/auxiliary-modules/equipment-tracking" },
      { title: "Checklist", href: "/auxiliary-modules/checklist" },
      { title: "Expense & Mileage", href: "/auxiliary-modules/expense-mileage" },
      { title: "Team Management", href: "/auxiliary-modules/team-management" },
      { title: "Custom Pricing", href: "/auxiliary-modules/custom-pricing" },
    ],
  },
  {
    title: "Helpful Resources",
    items: [
      { title: "Tips & Tricks", href: "/helpful-resources/tips-tricks" },
      { title: "Common Issues", href: "/helpful-resources/common-issues" },
    ],
  },
  {
    title: "Account Information",
    items: [
      { title: "Subscription", href: "/account-information/subscription" },
      { title: "Delete Account", href: "/account-information/delete-account" },
    ],
  },
];

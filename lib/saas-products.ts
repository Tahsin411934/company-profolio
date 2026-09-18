export type SaasProduct = {
  slug: string;
  category: string;
  name: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  heroImage: string | null;
  imageAlt: string;
  accent: string;
  imageAreaClass: string;
  badgeClass: string;
  buttonClass: string;
  outlineClass: string;
  features: string[];
  homepageFeatures: string[];
  quickBenefits: { title: string; description: string }[];
  whyChoose: { title: string; description: string }[];
  highlightTitle: string;
  highlightText: string;
  showcaseTitle: string;
  showcaseText: string;
  showcaseChecks: string[];
  useCases: { title: string; description: string }[];
  workflowTitle: string;
  workflowItems: string[];
  productUrl: string;
  demoUrl: string | null;
  registerUrl?: string;
  metaTitle: string;
  metaDescription: string;
};

export const saasProducts: Record<string, SaasProduct> = {
  ecommerce: {
    slug: "ecommerce",
    category: "E-COMMERCE",
    name: "E-commerce Solution",
    shortTitle: "All-in-One E-commerce Platform for Your Business",
    subtitle: "All-in-One E-commerce Platform",
    description:
      "Launch, manage, and grow your online business from one powerful and easy-to-use platform.",
    heroImage: "/porducts/ecommerce.png",
    imageAlt: "E-commerce Solution software preview",
    accent: "#0DB89B",
    imageAreaClass: "bg-[linear-gradient(135deg,#EDFFFA_0%,#F7FFFC_100%)]",
    badgeClass: "bg-[#DDF9F1] text-[#0A987F]",
    buttonClass: "bg-[#0DB89B] hover:bg-[#0AA98E] focus-visible:ring-[#0DB89B]",
    outlineClass: "border-[#0DB89B] text-[#0DB89B] hover:bg-[#E9FFFA]",
    features: [
      "Product Management",
      "Inventory Tracking",
      "Order Management",
      "Customer Management",
      "Payment Integration",
      "Discount & Coupon System",
      "Shipping Management",
      "Reports & Analytics",
    ],
    homepageFeatures: [
      "Product & Inventory Management",
      "Order & Customer Management",
      "Payment Integration",
      "Modern Responsive Storefront",
    ],
    quickBenefits: [
      { title: "Easy to Use", description: "Manage products, orders, and customers from a clean dashboard." },
      { title: "Scalable", description: "Built to support growing catalogs and expanding operations." },
      { title: "Reliable", description: "Keep store operations organized with practical workflows." },
      { title: "Support Ready", description: "Get guidance when planning, launching, and improving your store." },
    ],
    whyChoose: [
      { title: "Centralized store control", description: "Run products, orders, customers, and reporting from one place." },
      { title: "Faster launch process", description: "Move from idea to online store with a focused implementation path." },
      { title: "Better customer experience", description: "Support a responsive storefront and smooth purchase journey." },
      { title: "Growth-friendly operations", description: "Use inventory, discount, shipping, and analytics tools as you scale." },
    ],
    highlightTitle: "Turn Your Ideas into Online Success",
    highlightText: "A practical commerce platform for teams that want to sell faster and manage daily operations with confidence.",
    showcaseTitle: "A Smarter Way to Manage Your Online Business",
    showcaseText:
      "Bring storefront, products, orders, payments, and reports into a single working system for your business.",
    showcaseChecks: ["Clean and intuitive dashboard", "Real-time order visibility", "Easy product management", "Detailed business reports"],
    useCases: [
      { title: "Start Selling Faster", description: "Launch a professional online store without scattered tools." },
      { title: "Manage Everything Centrally", description: "Keep orders, customers, products, and inventory connected." },
      { title: "Grow with Your Business", description: "Support new campaigns, products, and workflows as demand grows." },
      { title: "Improve Customer Experience", description: "Give customers a clean, responsive buying journey." },
    ],
    workflowTitle: "Relevant Integrations",
    workflowItems: ["Payment Gateway", "Analytics", "Marketing", "Courier / Delivery", "Email / Notification"],
    productUrl: "/products/ecommerce",
    demoUrl: null,
    registerUrl: "/store-register",
    metaTitle: "E-commerce Solution | AFT SOFT AND LIMITED",
    metaDescription: "Launch and manage your online business with AFT SOFT AND LIMITED's all-in-one e-commerce platform.",
  },
  hrm: {
    slug: "hrm",
    category: "HR & PAYROLL",
    name: "HRM",
    shortTitle: "Complete HR Management Solution",
    subtitle: "Complete Human Resource Management Solution",
    description:
      "Manage employees, attendance, leave, payroll, performance and HR operations from one centralized platform.",
    heroImage: "/porducts/hrm.png",
    imageAlt: "HRM dashboard software preview",
    accent: "#2783F3",
    imageAreaClass: "bg-[linear-gradient(135deg,#EEF7FF_0%,#F8FBFF_100%)]",
    badgeClass: "bg-[#E2F0FF] text-[#1D6ED2]",
    buttonClass: "bg-[#2783F3] hover:bg-[#1E73DE] focus-visible:ring-[#2783F3]",
    outlineClass: "border-[#2783F3] text-[#2783F3] hover:bg-[#EEF7FF]",
    features: [
      "Employee Management",
      "Attendance Management",
      "Leave Management",
      "Payroll Management",
      "Loan Management",
      "KPI & Performance",
      "Documents Management",
      "Reports & Analytics",
    ],
    homepageFeatures: [
      "Employee Management",
      "Attendance & Leave",
      "Payroll & Salary Management",
      "KPI & Performance Tracking",
    ],
    quickBenefits: [
      { title: "Easy to Use", description: "Give HR teams a clear place to manage daily employee operations." },
      { title: "Organized", description: "Keep attendance, leave, payroll, and records connected." },
      { title: "Reliable", description: "Reduce repetitive HR work with consistent processes." },
      { title: "Support Ready", description: "Plan HR workflows with practical implementation support." },
    ],
    whyChoose: [
      { title: "Central HR records", description: "Keep employee data, documents, and reports in one system." },
      { title: "Attendance visibility", description: "Track attendance and leave with clearer operational control." },
      { title: "Simplified payroll", description: "Support salary workflows with structured payroll management." },
      { title: "Performance tracking", description: "Monitor KPI and performance information without scattered spreadsheets." },
    ],
    highlightTitle: "Simplify HR. Empower Your Team.",
    highlightText: "HRM helps growing organizations reduce manual work and manage people operations with a cleaner system.",
    showcaseTitle: "Manage Your Entire Workforce from One Place",
    showcaseText:
      "Bring employee records, attendance, leave, payroll, performance, and reports into one centralized HR platform.",
    showcaseChecks: ["Clean and intuitive dashboard", "Attendance and leave visibility", "Easy payroll management", "Detailed HR reports"],
    useCases: [
      { title: "Reduce Manual HR Work", description: "Replace scattered records with structured HR workflows." },
      { title: "Improve Attendance Accuracy", description: "Keep attendance and leave information easier to review." },
      { title: "Simplify Payroll", description: "Organize salary workflows with clear employee data." },
      { title: "Track Employee Performance", description: "Follow KPI and performance activity from one place." },
    ],
    workflowTitle: "Relevant Integrations",
    workflowItems: ["Attendance Devices", "Payroll", "Email", "Reports", "Internal Systems"],
    productUrl: "/products/hrm",
    demoUrl: null,
    metaTitle: "HRM | Complete HR Management Software | AFT SOFT AND LIMITED",
    metaDescription: "Manage employees, attendance, leave, payroll, performance, and HR operations with HRM.",
  },
  "social-media-manager": {
    slug: "social-media-manager",
    category: "SOCIAL MEDIA",
    name: "Social Media Manager",
    shortTitle: "All-in-One Social Media Management Platform",
    subtitle: "All-in-One Social Media Management Platform",
    description:
      "Plan, schedule, publish and manage your social media presence from one powerful dashboard.",
    heroImage: "/porducts/social-media-manager.png",
    imageAlt: "Social Media Manager software preview",
    accent: "#B42CC4",
    imageAreaClass: "bg-[linear-gradient(135deg,#FFF1FC_0%,#FAF5FF_100%)]",
    badgeClass: "bg-[#F8E5FB] text-[#9825A6]",
    buttonClass: "bg-[#B42CC4] hover:bg-[#9F23AF] focus-visible:ring-[#B42CC4]",
    outlineClass: "border-[#B42CC4] text-[#B42CC4] hover:bg-[#FFF1FC]",
    features: [
      "Multi-Platform Accounts",
      "Post Scheduling",
      "Content Calendar",
      "Analytics & Reports",
      "Team Collaboration",
      "Inbox Management",
      "Content Library",
      "Performance Tracking",
    ],
    homepageFeatures: [
      "Multi-Platform Management",
      "Post Scheduling",
      "Analytics & Reports",
      "Team Collaboration",
    ],
    quickBenefits: [
      { title: "Easy to Use", description: "Plan and publish content from a focused dashboard." },
      { title: "Consistent", description: "Keep posting schedules and content planning organized." },
      { title: "Insightful", description: "Review performance with clear analytics and reports." },
      { title: "Team Ready", description: "Support collaboration across creators, managers, and teams." },
    ],
    whyChoose: [
      { title: "Multi-channel planning", description: "Manage several social platforms from one workflow." },
      { title: "Smarter scheduling", description: "Prepare content calendars and publish with less manual effort." },
      { title: "Performance clarity", description: "Track reports and content results from the same dashboard." },
      { title: "Team collaboration", description: "Keep content tasks, reviews, and publishing activity organized." },
    ],
    highlightTitle: "Plan Better. Publish Faster.",
    highlightText: "A social media workspace for teams that need consistency, clarity, and better control over content operations.",
    showcaseTitle: "Manage Every Social Channel from One Dashboard",
    showcaseText:
      "Bring platform accounts, scheduling, calendar planning, analytics, team collaboration, and content assets into one flow.",
    showcaseChecks: ["Clean and intuitive dashboard", "Unified content calendar", "Easy post scheduling", "Detailed performance reports"],
    useCases: [
      { title: "Save Time", description: "Reduce repetitive publishing tasks with organized scheduling." },
      { title: "Stay Consistent", description: "Keep campaigns and calendars aligned across channels." },
      { title: "Understand Performance", description: "Use reports to see which content is working." },
      { title: "Manage Teams Better", description: "Coordinate content work across multiple team members." },
    ],
    workflowTitle: "Relevant Channels",
    workflowItems: ["Facebook", "Instagram", "LinkedIn", "YouTube", "TikTok"],
    productUrl: "/products/social-media-manager",
    demoUrl: null,
    metaTitle: "Social Media Manager | AFT SOFT AND LIMITED",
    metaDescription: "Plan, schedule, publish, and manage social media content from one powerful dashboard.",
  },
  "bank-check-printer": {
    slug: "bank-check-printer",
    category: "FINANCE & UTILITIES",
    name: "Bank Check Printer",
    shortTitle: "Business Check Printing Software",
    subtitle: "Business Check Printing Software",
    description:
      "A streamlined business utility for preparing and printing checks using configurable templates and printer-friendly layouts.",
    heroImage: null,
    imageAlt: "Bank Check Printer software preview",
    accent: "#F38A17",
    imageAreaClass: "bg-[linear-gradient(135deg,#FFF7EC_0%,#FFFCF7_100%)]",
    badgeClass: "bg-[#FFF0DA] text-[#CC6E0B]",
    buttonClass: "bg-[#F38A17] hover:bg-[#DA780F] focus-visible:ring-[#F38A17]",
    outlineClass: "border-[#F38A17] text-[#F38A17] hover:bg-[#FFF7EC]",
    features: [
      "Multiple Template Support",
      "Custom Print Layouts",
      "Batch Printing",
      "Printer-Friendly Formatting",
      "Payee Data Management",
      "Print History",
      "Role-Based Access",
      "Simple Reporting",
    ],
    homepageFeatures: [
      "Multiple Template Support",
      "Custom Print Layouts",
      "Batch Printing",
      "Easy-to-Use Interface",
    ],
    quickBenefits: [
      { title: "Easy to Use", description: "Prepare checks with a simpler, focused workflow." },
      { title: "Organized", description: "Keep templates, payee data, and print history easier to manage." },
      { title: "Printer Friendly", description: "Use configurable layouts designed for printing workflows." },
      { title: "Support Ready", description: "Get help setting up templates and daily print processes." },
    ],
    whyChoose: [
      { title: "Flexible templates", description: "Support multiple check templates and layout needs." },
      { title: "Less repetitive entry", description: "Use saved payee data and batch printing workflows." },
      { title: "Cleaner print process", description: "Preview layouts before printing to reduce manual correction." },
      { title: "Organized records", description: "Keep print history and simple reports in one place." },
    ],
    highlightTitle: "Prepare and Print with Less Manual Work",
    highlightText: "A focused utility for businesses that need cleaner check preparation, template control, and organized print workflows.",
    showcaseTitle: "Prepare and Print Checks with Less Manual Work",
    showcaseText:
      "Use configurable templates, payee data, preview layouts, and print history to support daily check printing tasks.",
    showcaseChecks: ["Clean and intuitive dashboard", "Configurable templates", "Easy print preparation", "Organized print history"],
    useCases: [
      { title: "Reduce Repetitive Entry", description: "Reuse saved payee details and common print data." },
      { title: "Standardize Print Layouts", description: "Keep check formatting more consistent with templates." },
      { title: "Handle Bulk Printing", description: "Prepare multiple checks through a structured workflow." },
      { title: "Keep Print History Organized", description: "Review previous print activity from one place." },
    ],
    workflowTitle: "Workflow",
    workflowItems: ["Prepare Data", "Select Template", "Preview Layout", "Print"],
    productUrl: "/products/bank-check-printer",
    demoUrl: null,
    metaTitle: "Bank Check Printer Software | AFT SOFT AND LIMITED",
    metaDescription: "Prepare and print checks using configurable templates and printer-friendly layouts.",
  },
};

export const saasProductList = Object.values(saasProducts);

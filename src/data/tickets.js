const tickets = [
  {
    id: "#1001",
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log into their account. They've tried resetting their password multiple times but still cannot log in.",
    customer: "John Smith",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/15/2024",
  },
  {
    id: "#1002",
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Sarah Johnson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/16/2024",
  },
  {
    id: "#1003",
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section.",
    customer: "Michael ",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/17/2024",
  },
  {
    id: "#1004",
    title: "Incorrect Billing Address",
    description:
      "Customer's billing address shows a different city. They updated it but it still displays the old one.",
    customer: "Emily Davis",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/18/2024",
  },
  {
    id: "#1005",
    title: "App Crash on Launch",
    description:
      "Mobile app crashes immediately upon opening on Android 13.",
    customer: "David Wilson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/19/2024",
  },
  {
    id: "#1006",
    title: "Refund Not Processed",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    customer: "Sophia Taylor",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/20/2024",
  },
  {
    id: "#1007",
    title: "Two-Factor Authentication Issue",
    description:
      "Customer is not receiving 2FA codes on their registered phone number.",
    customer: "James Anderson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/21/2024",
  },
  {
    id: "#1008",
    title: "Unable to Update Profile Picture",
    description:
      "Customer tries to upload a profile picture but gets 'Upload failed' error.",
    customer: "Olivia Martinez",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/22/2024",
  },
  {
    id: "#1009",
    title: "Subscription Auto-Renewal",
    description:
      "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    customer: "Liam Thomas",
    priority: "MEDIUM PRIORITY",
    status: "Open",
    createdAt: "1/23/2024",
  },
  {
    id: "#1010",
    title: "Missing Order Confirmation Email",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Isabella",
    priority: "MEDIUM PRIORITY",
    status: "Open",
    createdAt: "1/24/2024",
  },
  {
    id: "#1011",
    title: "Website Loading Slowly",
    description:
      "Customer reports the dashboard takes more than 30 seconds to load after login.",
    customer: "William Clark",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/25/2024",
  },
  {
    id: "#1012",
    title: "Email Notifications Not Working",
    description:
      "Customer stopped receiving system notification emails for ticket updates.",
    customer: "Ava Rodriguez",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/26/2024",
  },
  {
    id: "#1013",
    title: "Feature Request - Dark Mode",
    description:
      "Customer requested a dark mode option for better usability at night.",
    customer: "Ethan Hall",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/27/2024",
  },
  {
    id: "#1014",
    title: "Duplicate Transactions",
    description:
      "Customer was charged twice for the same subscription plan.",
    customer: "Mia Allen",
    priority: "HIGH PRIORITY",
    status: "In-Progress",
    createdAt: "1/28/2024",
  },
  {
    id: "#1015",
    title: "Account Locked",
    description:
      "Customer account was locked after multiple failed login attempts, needs manual unlock.",
    customer: "Noah Wright",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/29/2024",
  },
];

export default tickets;

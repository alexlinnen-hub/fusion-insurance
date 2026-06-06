const CUSTOMERS = {
  "FN00123": {
    pin: "1234",
    name: "Matt Jones",
    policy_number: "FN00123",
    balance_due: 64.50,
    due_date: "15 June 2026",
    payment_frequency: "Monthly",
    drivers: ["Matt Jones", "Alex Jones"],
    vehicles: [
      { make: "Tesla Model 3", year: 2022, reg: "EK20 BVT" },
      { make: "VW Caravelle", year: 2021, reg: "LN21 XPD" }
    ],
    address: "39 Priory Street, Altrincham, WA14 3BQ",
    ncd_years: 5,
    policy_type: "Comprehensive",
    status: "active"
  },
  "FN00456": {
    pin: "5678",
    name: "Chris Mosley",
    policy_number: "FN00456",
    balance_due: 1034,
    due_date: "No payment due",
    payment_frequency: "Annual",
    drivers: ["Chris Mosley", "Kate Mosley"],
    vehicles: [
      { make: "Nissan Juke", year: 2022, reg: "YR22 KLM" }
    ],
    address: "7 Birchwood Avenue, Mobberley, WA36 2TH",
    ncd_years: 3,
    policy_type: "Comprehensive",
    status: "active"
  },
  "FN00789": {
    pin: "9012",
    name: "Chris Jones",
    policy_number: "FN00789",
    balance_due: 112.00,
    due_date: "5 June 2026",
    payment_frequency: "Monthly",
    drivers: ["Chris Jones", "Sarah Jones"],
    vehicles: [
      { make: "BMW 3 Series", year: 2019, reg: "SG19 FHW" }
    ],
    address: "23 Queensway, Belfast, BT9 6EZ",
    ncd_years: 8,
    policy_type: "Comprehensive",
    status: "past_due"
  },
  "FN01012": {
    pin: "3456",
    name: "Steve Donovan",
    policy_number: "FN01012",
    balance_due: 0,
    due_date: "No payment due",
    payment_frequency: "Annual",
    drivers: ["Steve Donovan"],
    vehicles: [
      { make: "Ford Focus", year: 2020, reg: "DN20 RTV" }
    ],
    address: "8 Elmwood Drive, Manchester, M21 7HQ",
    ncd_years: 6,
    policy_type: "Comprehensive",
    status: "active"
  },
  "FN01345": {
    pin: "7890",
    name: "Richard Cooper",
    policy_number: "FN01345",
    balance_due: 47.99,
    due_date: "22 June 2026",
    payment_frequency: "Monthly",
    drivers: ["Richard Cooper", "Julie Cooper"],
    vehicles: [
      { make: "Audi A4", year: 2021, reg: "RC21 AUD" },
      { make: "Mini Cooper", year: 2019, reg: "JC19 MNI" }
    ],
    address: "15 Kingsway, Wilmslow, SK9 2LT",
    ncd_years: 10,
    policy_type: "Comprehensive",
    status: "active"
  },
  "FN01678": {
    pin: "2345",
    name: "Sam Kelly",
    policy_number: "FN01678",
    balance_due: 89.00,
    due_date: "10 July 2026",
    payment_frequency: "Monthly",
    drivers: ["Sam Kelly", "Rachel Kelly"],
    vehicles: [
      { make: "Volkswagen Golf", year: 2020, reg: "SK20 VWG" }
    ],
    address: "4 Heather Close, Edinburgh, EH10 5TR",
    ncd_years: 4,
    policy_type: "Comprehensive",
    status: "active"
  }
};

function lookupCustomer(policyNumber, pin) {
  const key = policyNumber.replace(/\s+/g, "").toUpperCase();
  const customer = CUSTOMERS[key];
  if (!customer) return { found: false };
  if (customer.pin !== pin.replace(/\D/g, "")) return { found: true, verified: false };
  return { found: true, verified: true, ...customer };
}

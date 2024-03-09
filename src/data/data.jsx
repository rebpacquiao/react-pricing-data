function data() {
    const pricingData = [
      {
        title: "Beginner",
        cost: 15,
        monthly: "Monthly",
        features: [
          "1000+ projects",
          "No transaction fees",
          "Unlimited Storage",
          "5 Downloads"
        ],
        buttonLabel: "Start Now",
        popular: false,
      },
      {
        title: "Starter",
        cost: 16,
        monthly: "Monthly",
        features: [
          "1000+ projects",
          "No transaction fees",
          "Unlimited Storage",
          "5 Downloads"
        ],
        buttonLabel: "Start Now",
        popular: true,
        popularButtonLabel: "Popular"
      },
      {
        title: "Professional",
        cost: 18,
        monthly: "Monthly",
        features: [
          "1000+ projects",
          "No transaction fees",
          "Unlimited Storage",
          "5 Downloads"
        ],
        buttonLabel: "Start Now",
        popular: false,
      },
      {
        title: "Power Plan",
        cost: 25,
        monthly: "Monthly",
        features: [
          "1000+ projects",
          "No transaction fees",
          "Unlimited Storage",
          "5 Downloads"
        ],
        buttonLabel: "Start Now",
        popular: false
      }
    ];
  
    return pricingData;
  }
  
  export default data;
  
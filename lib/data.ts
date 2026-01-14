// Navigation Links
export const navLinks = [
    { name: "Get Started", href: "/start" },
    { name: "Classes", href: "/classes" },
    { name: "Schedule", href: "/schedule" },
    { name: "Events", href: "/events" },
    { name: "Rentals", href: "/rentals" },
];

export const secondaryLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

// Offerings Cards
export const offerings = [
    {
        id: 1,
        title: "Progressive Programs",
        description: "Structured curriculum with clear milestones. Master fundamentals and advance weekly.",
        image: "/images/progressive.jpg",
        href: "/start",
    },
    {
        id: 2,
        title: "Drop-In Classes",
        description: "Flexible classes for experienced dancers. Join any session that fits your schedule.",
        image: "/images/dropin.jpg",
        href: "/classes",
    },
    {
        id: 3,
        title: "Socials & Events",
        description: "Practice what you learn at our weekly socials and special dance events.",
        image: "/images/socials.jpg",
        href: "/events",
    },
];

// Pricing Tiers
export const pricingTiers = [
    {
        id: 1,
        name: "Starter Membership",
        price: "$99",
        period: "/month",
        description: "Perfect for beginners starting their dance journey",
        features: [
            "2 progressive classes per week",
            "Access to beginner curriculum",
            "Weekly social dance entry",
            "Video lesson recaps",
            "Community Discord access",
        ],
        cta: "Start for $10",
        popular: false,
    },
    {
        id: 2,
        name: "Experienced Membership",
        price: "$149",
        period: "/month",
        description: "For dancers ready to level up their skills",
        features: [
            "Unlimited progressive classes",
            "All level access (beginner to advanced)",
            "Priority event registration",
            "Thursday intensive sessions",
            "1 private lesson per month",
            "Exclusive masterclass access",
        ],
        cta: "Join Now",
        popular: true,
    },
    {
        id: 3,
        name: "Drop-In",
        price: "$25",
        period: "/class",
        description: "Flexible option for experienced dancers",
        features: [
            "Single class access",
            "No commitment required",
            "All levels welcome",
            "Pay as you go",
        ],
        cta: "Book a Class",
        popular: false,
    },
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        quote: "BSO transformed my dancing in just 3 months. The progressive program actually works!",
        name: "Maria S.",
        role: "Member since 2023",
        rating: 5,
    },
    {
        id: 2,
        quote: "Best dance community in Orlando. The instructors are patient and the socials are amazing.",
        name: "Carlos R.",
        role: "Member since 2022",
        rating: 5,
    },
    {
        id: 3,
        quote: "I came in with zero dance experience. Now I confidently dance at weddings and parties!",
        name: "Jennifer T.",
        role: "Member since 2024",
        rating: 5,
    },
    {
        id: 4,
        quote: "The structured curriculum sets BSO apart. You actually see progress week over week.",
        name: "David M.",
        role: "Member since 2023",
        rating: 5,
    },
    {
        id: 5,
        quote: "Worth every penny. The community here is incredibly welcoming and supportive.",
        name: "Amanda L.",
        role: "Member since 2024",
        rating: 5,
    },
    {
        id: 6,
        quote: "Finally a dance school that treats bachata seriously. Professional yet fun atmosphere.",
        name: "Michael P.",
        role: "Member since 2022",
        rating: 5,
    },
];

// FAQs
export const faqs = [
    {
        question: "I've never danced before. Which class is for me?",
        answer: "Our Starter Membership is designed specifically for beginners! You'll start with foundational movements and progress at a comfortable pace. No prior experience needed.",
    },
    {
        question: "Do I need a partner?",
        answer: "No! We rotate partners during class so everyone gets to practice. This also helps you become a more versatile dancer.",
    },
    {
        question: 'What\'s a "Progressive Program"? Why not just drop-in classes?',
        answer: "Our Progressive Program follows a structured curriculum where each week builds on the previous. Unlike random drop-ins, you'll see measurable improvement and won't miss key fundamentals.",
    },
    {
        question: "How long until I feel comfortable dancing at a wedding or party?",
        answer: "Most students feel confident on the social dance floor within 4-6 weeks of consistent classes. You'll be wedding-ready before you know it!",
    },
    {
        question: "How does the 7-day guarantee work?",
        answer: "Try your first week of classes. If you're not completely satisfied, we'll refund 100% of your membership fee. No questions asked.",
    },
    {
        question: "Can I freeze my membership?",
        answer: "Yes! Life happens. You can freeze your membership for up to 2 months per year with 7 days notice.",
    },
    {
        question: "Where are classes held?",
        answer: "We're located at our dedicated studio in Orlando. Full address and parking info will be sent after signup.",
    },
    {
        question: "Does my membership include Thursday classes?",
        answer: "Thursday intensive sessions are included in the Experienced Membership. Starter members can add Thursday access for an additional fee.",
    },
];

// Events
export const events = [
    {
        id: 1,
        title: "Tampa Takeover",
        date: "January 10, 2025",
        time: "7:00 PM - 12:00 AM",
        location: "Tampa, FL",
        description: "Join us for an epic night of dancing in Tampa! Workshop + social combo.",
        price: "$35",
        image: "/images/event-tampa.jpg",
    },
    {
        id: 2,
        title: "Weekly Social",
        date: "Every Friday",
        time: "9:00 PM - 1:00 AM",
        location: "BSO Studio, Orlando",
        description: "Our signature weekly social. Beginner lesson at 9PM, open dancing until late.",
        price: "Free for members",
        image: "/images/event-social.jpg",
    },
    {
        id: 3,
        title: "Valentine's Weekender",
        date: "February 14-16, 2025",
        time: "All Weekend",
        location: "Orlando, FL",
        description: "Three days of workshops, performances, and social dancing with guest instructors.",
        price: "$150",
        image: "/images/event-weekend.jpg",
    },
];

// Schedule
export const schedule = [
    {
        day: "Monday",
        classes: [
            { time: "7:00 PM", name: "Beginner Bachata", level: "Beginner", instructor: "Alex" },
            { time: "8:15 PM", name: "Intermediate Bachata", level: "Intermediate", instructor: "Jessica" },
        ],
    },
    {
        day: "Tuesday",
        classes: [
            { time: "7:00 PM", name: "Beginner Salsa", level: "Beginner", instructor: "Carlos" },
            { time: "8:15 PM", name: "Bachata Sensual", level: "Intermediate", instructor: "Alex" },
        ],
    },
    {
        day: "Wednesday",
        classes: [
            { time: "7:00 PM", name: "Beginner Bachata", level: "Beginner", instructor: "Jessica" },
            { time: "8:15 PM", name: "Advanced Bachata", level: "Advanced", instructor: "Alex" },
        ],
    },
    {
        day: "Thursday",
        classes: [
            { time: "7:00 PM", name: "Intensive Workshop", level: "All Levels", instructor: "Guest" },
            { time: "8:30 PM", name: "Styling & Technique", level: "Intermediate+", instructor: "Jessica" },
        ],
    },
    {
        day: "Friday",
        classes: [
            { time: "8:00 PM", name: "Pre-Social Lesson", level: "All Levels", instructor: "Team" },
            { time: "9:00 PM", name: "Social Dancing", level: "All Levels", instructor: "-" },
        ],
    },
    {
        day: "Saturday",
        classes: [
            { time: "12:00 PM", name: "Bachata Bootcamp", level: "Beginner", instructor: "Alex" },
            { time: "2:00 PM", name: "Partner Work", level: "Intermediate", instructor: "Carlos" },
        ],
    },
    {
        day: "Sunday",
        classes: [
            { time: "4:00 PM", name: "Practice Session", level: "All Levels", instructor: "Open" },
        ],
    },
];

// How it Works Steps
export const howItWorks = [
    {
        step: 1,
        title: "Choose Your Track",
        description: "Beginner or Experienced? We'll place you in the right program for your level.",
    },
    {
        step: 2,
        title: "Show Up",
        description: "No partner needed. We rotate so you learn to dance with everyone.",
    },
    {
        step: 3,
        title: "Progress Weekly",
        description: "Follow our structured syllabus and watch yourself improve every week.",
    },
];

// Rental Packages
export const rentalPackages = [
    {
        id: 1,
        name: "Hourly Rental",
        price: "$50",
        period: "/hour",
        description: "Perfect for small rehearsals or private practice",
        features: [
            "Up to 10 people",
            "Sound system included",
            "Mirrors & dance floor",
            "2 hour minimum",
        ],
    },
    {
        id: 2,
        name: "Half Day",
        price: "$175",
        period: "/4 hours",
        description: "Ideal for workshops or extended rehearsals",
        features: [
            "Up to 30 people",
            "Full sound system",
            "Staging available",
            "Climate controlled",
        ],
    },
    {
        id: 3,
        name: "Full Day",
        price: "$300",
        period: "/8 hours",
        description: "Best value for events or all-day sessions",
        features: [
            "Up to 50 people",
            "Complete A/V setup",
            "Tables & chairs",
            "Kitchen access",
        ],
    },
];

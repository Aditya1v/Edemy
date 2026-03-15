import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import search_icon from "./search_icon.svg";
import cross_icon from "./cross_icon.svg";
import upload_area from "./upload_area.svg";
import sketch from "./sktech.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.svg";
import adobe_logo from "./adobe_logo.svg";
import paypal_logo from "./paypal_logo.svg";
import course_1_thumbnail from "./course_1.png";
import course_2_thumbnail from "./course_2.png";
import course_3_thumbnail from "./course_3.png";
import course_4_thumbnail from "./course_4.png";
import star from "./rating_star.svg";
import star_blank from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";
import arrow_icon from "./arrow_icon.svg";
import down_arrow_icon from "./down_arrow_icon.svg";
import time_left_clock_icon from "./time_left_clock_icon.svg";
import time_clock_icon from "./time_clock_icon.svg";
import user_icon from "./user_icon.svg";
import home_icon from "./home_icon.svg";
import add_icon from "./add_icon.svg";
import my_course_icon from "./my_course_icon.svg";
import person_tick_icon from "./person_tick_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import file_upload_icon from "./file_upload_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import dropdown_icon from "./dropdown_icon.svg";
import patients_icon from "./patients_icon.svg";
import play_icon from "./play_icon.svg";
import blue_tick_icon from "./blue_tick_icon.svg";
import course_4 from "./course_4.png";
import profile_img from "./profile_img.png";
import profile_img2 from "./profile_img2.png";
import profile_img3 from "./profile_img3.png";
import lesson_icon from "./lesson_icon.svg";

export const assets = {
  logo,
  search_icon,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
  dropdown_icon,
  cross_icon,
  upload_area,
  logo_dark,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  course_4,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  patients_icon,
  profile_img,
  profile_img2,
  profile_img3,
  play_icon,
  blue_tick_icon,
  lesson_icon,
};

export const dummyEducatorData = {
  _id: "675ac1512100b91a6d9b8b24",
  name: "GreatStack",
  email: "user.greatstack@gmail.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
  createdAt: "2024-12-12T10:56:17.930Z",
  updatedAt: "2024-12-12T10:56:17.930Z",
  __v: 0,
};

export const dummyTestimonial = [
  {
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: assets.profile_img_1,
    rating: 5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Richard Nelson",
    role: "SWE 2 @ Samsung",
    image: assets.profile_img_2,
    rating: 4,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "James Washington",
    role: "SWE 2 @ Google",
    image: assets.profile_img_3,
    rating: 4.5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      courseTitle: "Introduction to JavaScript",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Advanced Python Programming",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Web Development Bootcamp",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Data Science with Python",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
    {
      courseTitle: "Cybersecurity Basics",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Great Stack",
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
      },
    },
  ],
  totalCourses: 8,
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:59:49.964Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Advanced Python Programming",
    purchaseDate: "2024-12-20T11:03:42.931Z",
  },
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "GreatStack",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ",
    },
    courseTitle: "Web Development Bootcamp",
    purchaseDate: "2024-12-20T11:04:48.798Z",
  },
];

export const dummyCourses = [
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",
    courseTitle: "Modern JavaScript for Web Interfaces",
    courseDescription:
      "<h2>Create Dynamic Web Experiences</h2><p>This course introduces modern JavaScript concepts used to build interactive user interfaces. You will explore how browsers execute scripts and how developers create responsive web features.</p><p>By the end of the course you will understand event handling, dynamic DOM updates, and how JavaScript powers modern websites.</p><ul><li>Understand browser scripting</li><li>Work with DOM manipulation</li><li>Build interactive UI behavior</li></ul>",
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "JavaScript Runtime Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "How JavaScript Executes in Browsers",
            lectureDuration: 14,
            lectureUrl: "https://youtu.be/W6NZfCO5SIk",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Connecting Scripts with HTML",
            lectureDuration: 17,
            lectureUrl: "https://youtu.be/hdI2bqOjy3c",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Interactive Page Behaviour",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Handling User Input Events",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/jS4aFq5-91M",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Updating Web Content Dynamically",
            lectureDuration: 13,
            lectureUrl: "https://youtu.be/PkZNo7MFNFg",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
        _id: "6773e37360cb0ab974342314",
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 4,
    courseThumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
  },

  {
    _id: "675ac1512100b91a6d9b8b24",
    courseTitle: "Professional Python Development",
    courseDescription:
      "<h2>Write Efficient Python Applications</h2><p>This course focuses on practical Python programming techniques used in real-world applications. You will learn code organization, reusable modules, and advanced language features.</p><p>Developers completing this course will be able to structure scalable Python programs and understand advanced programming constructs.</p><ul><li>Advanced Python functions</li><li>Object-oriented design</li><li>Code optimization techniques</li></ul>",
    coursePrice: 79.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Efficient Python Structures",
        chapterContent: [
          {
            lectureId: " lecture1",
            lectureTitle: "Working with Advanced Lists",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/rfscVS0vtbw",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Dictionary Based Data Modeling",
            lectureDuration: 820,
            lectureUrl: "https://youtu.be/kqtD5dpn9C8",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Object Oriented Design",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Designing Python Classes",
            lectureDuration: 880,
            lectureUrl: "https://youtu.be/JeznW_7DlB0",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Extending Classes with Inheritance",
            lectureDuration: 910,
            lectureUrl: "https://youtu.be/ZDa-Z5JzLYM",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
        _id: "6776369244daad0f313d81a9",
      },
    ],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T06:47:54.446Z",
    __v: 3,
    courseThumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1ae",
    courseTitle: "Foundations of Digital Security",
    courseDescription:
      "<h2>Understanding Cyber Defense</h2><p>This course explores how modern systems protect data and networks from threats. Students will learn about attack surfaces, vulnerabilities, and protective security practices.</p><p>The program also introduces practical defensive strategies used in IT security environments.</p><ul><li>Identify cyber threats</li><li>Learn network protection techniques</li><li>Understand encryption basics</li></ul>",
    coursePrice: 69.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Security Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Understanding Security Risks",
            lectureDuration: 12,
            lectureUrl: "https://youtu.be/inWWhr5tnEA",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Common Attack Techniques",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/U_P23SqJaDc",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Practical Security Measures",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Password and Identity Security",
            lectureDuration: 15,
            lectureUrl: "https://youtu.be/2TofunAI6fU",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Network Protection Techniques",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/3Kq1MIfTWCE",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [],
    createdAt: "2024-12-27T11:30:00.000Z",
    updatedAt: "2024-12-31T04:14:49.773Z",
    __v: 2,
    courseThumbnail: "https://img.youtube.com/vi/inWWhr5tnEA/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1a7",
    courseTitle: "Complete Frontend Development",
    courseDescription:
      "<h2>Design and Build Modern Websites</h2><p>This course teaches the essential technologies required to create responsive websites. Students will learn layout design, browser styling techniques, and dynamic page behaviour.</p><p>Projects throughout the course will help you develop real-world frontend development skills.</p><ul><li>Modern HTML structures</li><li>Responsive CSS layouts</li><li>Dynamic JavaScript features</li></ul>",
    coursePrice: 99.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Website Structure",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Structuring Web Pages with HTML",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/qz0aGYrrlhU",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Responsive Styling with CSS",
            lectureDuration: 700,
            lectureUrl: "https://youtu.be/1Rs2ND1ryYc",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Dynamic Interfaces",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "JavaScript UI Logic",
            lectureDuration: 800,
            lectureUrl: "https://youtu.be/hdI2bqOjy3c",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Interactive Components",
            lectureDuration: 850,
            lectureUrl: "https://youtu.be/W6NZfCO5SIk",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2024-12-31T05:31:27.290Z",
    __v: 2,
    courseThumbnail: "https://img.youtube.com/vi/qz0aGYrrlhU/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1ac",
    courseTitle: "Cloud Infrastructure Fundamentals",
    courseDescription:
      "<h2>Learn Modern Cloud Platforms</h2><p>This course explains how modern applications are deployed in cloud environments. Students will explore virtualization, cloud services, and distributed infrastructure.</p><p>Practical examples demonstrate how companies deploy scalable systems using cloud technology.</p><ul><li>Understand cloud architecture</li><li>Work with scalable infrastructure</li><li>Explore storage and compute services</li></ul>",
    coursePrice: 69.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Cloud Concepts",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Virtual Infrastructure",
            lectureDuration: 600,
            lectureUrl: "https://youtu.be/M988_fsOSWo",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Understanding Cloud Deployment Models",
            lectureDuration: 720,
            lectureUrl: "https://youtu.be/2LaAJq1lB1Q",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Cloud Platforms",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Working with AWS Services",
            lectureDuration: 800,
            lectureUrl: "https://youtu.be/ulprqHHWlng",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Exploring Google Cloud Tools",
            lectureDuration: 850,
            lectureUrl: "https://youtu.be/EN4fEbcFZ_E",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [],
    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2024-12-31T05:32:55.357Z",
    __v: 1,
    courseThumbnail: "https://img.youtube.com/vi/M988_fsOSWo/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1ad",
    courseTitle: "Applied Data Analytics with Python",
    courseDescription:
      "<h2>Analyze Real-World Data</h2><p>This course introduces the workflow used by data analysts to transform raw datasets into useful insights. Students will learn tools for data manipulation and visualization.</p><p>The program focuses on practical data analysis techniques using Python libraries.</p><ul><li>Data cleaning</li><li>Exploratory data analysis</li><li>Visualization techniques</li></ul>",
    coursePrice: 89.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Python for Analysis",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Using Python for Data Processing",
            lectureDuration: 30,
            lectureUrl: "https://youtu.be/vmEHCJofslg",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Numerical Computing with NumPy",
            lectureDuration: 25,
            lectureUrl: "https://youtu.be/QUT1VHiLmmI",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Data Visualization",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Visualizing Data with Matplotlib",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/DAQNHzOcO5A",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Advanced Visualization Techniques",
            lectureDuration: 25,
            lectureUrl: "https://youtu.be/6GUZXDef2U0",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: [
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
    ],
    courseRatings: [
      {
        userId: "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
        rating: 5,
        _id: "6773acf160cb0ab974342248",
      },
    ],
    createdAt: "2024-12-27T10:00:00.000Z",
    updatedAt: "2024-12-31T09:57:48.992Z",
    __v: 3,
    courseThumbnail: "https://img.youtube.com/vi/vmEHCJofslg/maxresdefault.jpg",
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1b1",
    courseTitle: "Mobile App Development with Flutter",
    courseDescription:
      "<h2>Build Cross-Platform Mobile Applications</h2><p>This course teaches how to develop high-performance mobile applications using Flutter and Dart. You will learn how to design responsive UI components and manage application state efficiently.</p><p>By the end of the course, you will be able to build fully functional Android and iOS apps from a single codebase.</p><ul><li>Understand Flutter architecture</li><li>Design responsive mobile interfaces</li><li>Build and deploy mobile apps</li></ul>",
    coursePrice: 79.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Flutter Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Flutter Framework",
            lectureDuration: 22,
            lectureUrl: "https://youtu.be/VPvVD8t02U8",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Flutter Development Environment",
            lectureDuration: 25,
            lectureUrl: "https://youtu.be/x0uinJvhNxI",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Building Mobile Interfaces",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Creating Layouts and Widgets",
            lectureDuration: 20,
            lectureUrl: "https://youtu.be/1gDhl4leEzA",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Managing App State in Flutter",
            lectureDuration: 24,
            lectureUrl: "https://youtu.be/d_m5csmrf7I",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    courseRatings: [],
    createdAt: "2025-01-05T08:00:00.000Z",
    updatedAt: "2025-01-05T08:00:00.000Z",
    __v: 0,
    courseThumbnail: "https://img.youtube.com/vi/VPvVD8t02U8/maxresdefault.jpg",
  },

  {
    _id: "605c72efb3f1c2b1f8e4e1b2",
    courseTitle: "System Design for Scalable Applications",
    courseDescription:
      "<h2>Design Large Scale Software Systems</h2><p>This course introduces the principles of designing scalable and reliable software systems used in modern tech companies.</p><p>You will learn how distributed systems work, how databases scale, and how architects design systems capable of handling millions of users.</p><ul><li>Understand distributed architecture</li><li>Design scalable backend systems</li><li>Learn caching and load balancing strategies</li></ul>",
    coursePrice: 89.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "System Design Basics",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "Introduction to Scalable Architecture",
            lectureDuration: 18,
            lectureUrl: "https://youtu.be/bUHFg8CZFws",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Understanding Load Balancing",
            lectureDuration: 21,
            lectureUrl: "https://youtu.be/K0Ta65OqQkY",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "Scaling Applications",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Database Scaling Techniques",
            lectureDuration: 23,
            lectureUrl: "https://youtu.be/q0KGYwNbf-0",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Caching and Performance Optimization",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/2LaAJq1lB1Q",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: "675ac1512100b91a6d9b8b24",
    enrolledStudents: ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    courseRatings: [],
    createdAt: "2025-01-10T09:00:00.000Z",
    updatedAt: "2025-01-10T09:00:00.000Z",
    __v: 0,
    courseThumbnail: "https://img.youtube.com/vi/bUHFg8CZFws/maxresdefault.jpg",
  },
];

// ============ MOBILE MENU ==================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Mobile Dropdown Toggle
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// dropdownToggle.addEventListener('click', (e) => {
//     e.stopPropagation(); // Prevents menu closing when clicking inside
//     dropdownMenu.classList.toggle('hidden');
// });

// Close dropdown when clicking outside
document.body.addEventListener('click', () => {
    if (!dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('hidden');
    }
});



const courses = [
    {
      name: "SAP Financial Accounting (FI)",
      image: "./assets/images/courses_images/SAP-FICO.jpg",
      description: `
        This course focuses on the core functionalities of SAP FI, covering financial transactions, ledger management, and reporting. You’ll gain hands-on experience with real-world scenarios.
        <ul class="list-disc pl-6 m-4 text-gray-600 ms-4">
          <li>Understand SAP FI configurations</li>
          <li>Learn ledger and account management</li>
          <li>Generate financial statements</li>
        </ul>
      `,
    },
      {
        name: "SAP S/4HANA",
        image: "./assets/images/courses_images/sap-s4-hana.jpg",
        description: `
          Dive into SAP's next-generation business suite, designed to simplify processes and leverage real-time analytics. Gain hands-on experience with the latest features.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Learn about intelligent ERP</li>
            <li>Experience real-time business analytics</li>
            <li>Explore migration to S/4HANA</li>
          </ul>
        `,
      },
      {
        name: "SAP Extended Warehouse Management (EWM)",
        image: "./assets/images/courses_images/SAP-EWM.png",
        description: `
          Get in-depth knowledge of managing and monitoring warehouse operations efficiently with SAP EWM. Learn to enhance inventory management.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Optimize warehouse layouts and resources</li>
            <li>Handle inventory efficiently</li>
            <li>Understand warehouse automation</li>
          </ul>
        `,
      },
      {
        name: "SAP Advanced Business Application Programming (ABAP)",
        image: "./assets/images/courses_images/sap-abap.png",
        description: `
          Develop expertise in SAP's proprietary programming language, ABAP, for customizing SAP applications to meet business needs.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Learn ABAP programming fundamentals</li>
            <li>Create custom reports and transactions</li>
            <li>Debug and optimize SAP applications</li>
          </ul>
        `,
      },
      {
        name: "SAP Supply Chain Management (SCM)",
        image: "./assets/images/courses_images/sap-scm.jpeg",
        description: `
          Understand the intricacies of supply chain planning and management with SAP SCM. Optimize processes for better efficiency and cost savings.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Learn supply chain planning</li>
            <li>Manage logistics and transportation</li>
            <li>Optimize procurement processes</li>
          </ul>
        `,
      },
      {
        name: "SAP Production Planning (PP)",
        image: "./assets/images/courses_images/sap-pp.png",
        description: `
          This course covers the essentials of production planning, manufacturing processes, and resource management within SAP.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Master production planning processes</li>
            <li>Understand material requirement planning (MRP)</li>
            <li>Streamline manufacturing workflows</li>
          </ul>
        `,
      },
      {
        name: "SAP Environment, Health, and Safety (EHS)",
        image: "./assets/images/courses_images/sap-ehs.jpeg",
        description: `
          Learn how to manage environmental compliance, health, and safety within SAP systems. Gain skills to enhance workplace safety and sustainability.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Implement EHS compliance programs</li>
            <li>Monitor workplace safety incidents</li>
            <li>Generate environmental reports</li>
          </ul>
        `,
      },
      {
        name: "SAP Ariba",
        image: "./assets/images/courses_images/sap-ariba.jpeg",
        description: `
          Learn how to streamline procurement processes and collaborate with suppliers using SAP Ariba. This course covers the full range of procurement and supply chain management.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Master procurement management</li>
            <li>Understand supplier collaboration tools</li>
            <li>Enhance spend visibility and control</li>
          </ul>
        `,
      },
      {
        name: "SAP Enterprise Resource Management (ERM)",
        image: "./assets/images/courses_images/sap-erm.jpg",
        description: `
          This course provides a comprehensive understanding of managing enterprise resources effectively with SAP ERM. Optimize processes across departments for enhanced productivity.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Learn resource planning and allocation</li>
            <li>Understand integration of business units</li>
            <li>Gain insights into financial and human resource management</li>
          </ul>
        `,
      },
      {
        name: "SAP Plant Maintenance (PM)",
        image: "./assets/images/courses_images/sap-pm.png",
        description: `
          Become proficient in managing maintenance activities, ensuring equipment reliability, and reducing downtime with SAP PM. This course is vital for maintaining operational efficiency.
          <ul class="list-disc pl-6 m-4 text-gray-600">
            <li>Master preventive and corrective maintenance</li>
            <li>Learn equipment and asset management</li>
            <li>Generate and manage maintenance orders</li>
          </ul>
        `,
      },
      {
        name: "SAP Materials Management (MM)",
        image: "./assets/images/courses_images/sap-mm.jpeg",
        description: `
          Dive into SAP MM to master procurement processes, inventory management, and vendor evaluation. The course includes practical exercises and case studies.
          <ul class="list-disc pl-6 m-4 text-gray-600 ms-4">
            <li>Understand procurement cycles</li>
            <li>Learn inventory and stock management</li>
            <li>Optimize supply chain processes</li>
          </ul>
        `,
      },
      {
        name: "SAP Sales and Distribution (SD)",
        image: "./assets/images/courses_images/sap-sd.jpeg",
        description: `
          This course equips you with the skills needed for managing sales orders, distribution channels, and billing. Learn to streamline business operations efficiently.
          <ul class="list-disc pl-6 m-4 text-gray-600 ms-4">
            <li>Master sales order processing</li>
            <li>Understand distribution and logistics</li>
            <li>Generate comprehensive sales reports</li>
          </ul>
        `,
      },
  ];
 
  
  const courseNav = document.getElementById("courseNav");
  const courseDetails = document.getElementById("courseDetails");
  
  // Populate navigation and course details
  courses.forEach((course, index) => {
    // Navigation buttons
    const navButton = document.createElement("button");
    navButton.textContent = course.name;
    navButton.className =
      "w-full text-left font-semibold text-indigo-600  rounded-lg hover:bg-blue-100 active:bg-blue-200 transition focus:outline-none";
    navButton.setAttribute("data-target", `course-${index}`);
    navButton.addEventListener("click", () => {
      document
        .getElementById(`course-${index}`)
        .scrollIntoView({ behavior: "smooth" });
    });
    courseNav.appendChild(navButton);
  
    // Course details
    const courseDiv = document.createElement("div");
    courseDiv.id = `course-${index}`;
    courseDiv.className = "space-y-4";
    courseDiv.innerHTML = `
      <h2 class="text-2xl font-bold text-blue-600">${course.name}</h2>
      <img src="${course.image}" alt="${course.name}" 
        class="w-full max-w-md mx-auto rounded-lg shadow-md object-cover">
      <p class="text-gray-700 m-4">${course.description}</p>
    `;
    courseDetails.appendChild(courseDiv);
  });
  

// document.querySelectorAll('[data-tab]').forEach((button) => {
//     button.addEventListener('click', () => {
//       // Hide all tab contents
//       document.querySelectorAll('.tab-content').forEach((tab) => {
//         tab.classList.add('hidden');
//       });
  
//       // Remove active state from all buttons
//       document.querySelectorAll('[data-tab]').forEach((btn) => {
//         btn.classList.remove('bg-blue-100');
//       });
  
//       // Show the selected tab content
//       const target = button.getAttribute('data-tab');
//       document.getElementById(target).classList.remove('hidden');
  
//       // Add active state to the clicked button
//       button.classList.add('bg-blue-100');
//     });
//   });
  
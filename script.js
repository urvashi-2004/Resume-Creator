const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const name = document.getElementById("name");
const role = document.getElementById("role");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const college = document.getElementById("college");
const address = document.getElementById("address");
const degree = document.getElementById("degree");
const branch = document.getElementById("branch");
const Syear = document.getElementById("Syear");
const Pyear = document.getElementById("Pyear");
const cgpa = document.getElementById("cgpa");

const skill=document.getElementById('languages');
const framework=document.getElementById('framework');
const tools=document.getElementById('tools');
const database=document.getElementById('database');

const project = document.getElementById("project");
const technology = document.getElementById("technology");
const project_description = document.getElementById("project_description");
const plink = document.getElementById("plink");

const company = document.getElementById("company");
const designation = document.getElementById("designation");
const duration = document.getElementById("duration");
const clocation = document.getElementById("clocation");
const company_description = document.getElementById("company_description");

function handleSubmit(e) {
  e.preventDefault();
  const name_resume = document.getElementById("name_resume");
  const role_resume = document.getElementById("role_resume");
  const email_resume = document.getElementById("email_resume");
  const phone_resume = document.getElementById("phone_resume");

  const college_resume = document.getElementById("college_resume");
  const address_resume = document.getElementById("address_resume");
  const degree_resume = document.getElementById("degree_resume");
  const branch_resume = document.getElementById("branch_resume");
  const Syear_resume = document.getElementById("Syear_resume");
  const Pyear_resume = document.getElementById("Pyear_resume");
  const cgpa_resume = document.getElementById("cgpa_resume");
  
  const language_resume = document.getElementById("language_resume");
  const framework_resume = document.getElementById("framework_resume");
  const tools_resume = document.getElementById("tools_resume");
  const database_resume = document.getElementById("database_resume");

  const project_resume = document.getElementById("project_resume");
  const technology_resume = document.getElementById("technology_resume");
  const project_description_resume = document.getElementById("project_description_resume");
  const project_link_resume = document.getElementById("project_link_resume");
  
  const company_resume = document.getElementById("company_resume");
  const designation_resume = document.getElementById("designation_resume");
  const duration_resume = document.getElementById("duration_resume");
  const location_resume = document.getElementById("location_resume");
  const company_description_resume = document.getElementById("company_description_resume");


  name_resume.innerHTML = name.value;
  role_resume.innerHTML = role.value;
  email_resume.innerHTML = email.value;
  phone_resume.innerHTML = phone.value;

  college_resume.innerHTML = college.value;
  address_resume.innerHTML = address.value;
  degree_resume.innerHTML = degree.value;
  branch_resume.innerHTML = branch.value;
  Syear_resume.innerHTML = Syear.value;
  Pyear_resume.innerHTML = Pyear.value;
  cgpa_resume.innerHTML = "CGPA : " + cgpa.value;

  language_resume.innerHTML = language.value;
  framework_resume.innerHTML =  framework.value;
  database_resume.innerHTML =  database.value; 
  tools_resume.innerHTML = tools.value;
 

  project_resume.innerHTML = "Project Name : " + project.value;
  technology_resume.innerHTML = "Technology Used : " + technology.value;
  project_description_resume.innerHTML = "Description : " + project_description.value;
  project_link_resume.innerHTML = "Link : " + plink.value;

  company_resume.innerHTML = company.value;
  designation_resume.innerHTML = designation.value;
  duration_resume.innerHTML = duration.value;
  location_resume.innerHTML = clocation.value;
  company_description_resume.innerHTML = company_description.value;
}

const clearResume = () => {
  name_resume.innerHTML = "";
  role_resume.innerHTML = "";
  email_resume.innerHTML = "";
  phone_resume.innerHTML = "";

  college_resume.innerHTML = "";
  address_resume.innerHTML = "";
  degree_resume.innerHTML = "";
  branch_resume.innerHTML = "";
  Syear_resume.innerHTML = "";
  Pyear_resume.innerHTML = "";
  cgpa_resume.innerHTML = "";

  language_resume.innerHTML = "";
  framework_resume.innerHTML = "";
  database_resume.innerHTML = "";
  tools_resume.innerHTML = "";
  
  project_resume.innerHTML = "";
  technology_resume.innerHTML = "";
  project_description_resume.innerHTML = "";
  project_link_resume.innerHTML = "";

  company_resume.innerHTML = "";
  designation_resume.innerHTML = "";
  location_resume.innerHTML = "";
  duration_resume.innerHTML = "";
  company_description_resume.innerHTML = "";
};

function handleLeft() {
  const left = document.querySelector(".left-section");
  left.style.display = "none";
  const right = document.querySelector(".right-section");
  right.style.overflowY = "visible";
  right.style.width = "100%";
  const print = document.querySelector(".print");
  print.style.display = "block";
};

function handlePrint() {
  const right = document.querySelector(".right-section");
  window.print();
  const left = document.querySelector(".left-section");
  left.style.display = "flex";
  right.style.width = "70%";
  right.style.overflowY = "auto";
  const print = document.querySelector(".print");
  print.style.display = "none";
};



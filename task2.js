function getFormvalue() {
  const formEL = document.getElementById("form1");
  event.preventDefault();
  const formName = formEL.elements["fname"].value;
  const formLastName = formEL.elements["lname"].value;
  console.log(formName);
  console.log(formLastName);
}

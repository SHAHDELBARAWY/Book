const websites = [];

const submitBtn = document.getElementById("submitBtn");

const bookmarkNameInput = document.getElementById("bookmarkName");
const bookmarkNameError = document.getElementById("msgName");

const bookmarkURLInput = document.getElementById("bookmarkURL");
const bookmarkURLError = document.getElementById("msgURL");

const websiteTable = document.getElementById("website-list");
const tbodyWebsiteTable = websiteTable.querySelector("tbody");

const handleAppendToTable1 = () => {
  tbodyWebsiteTable.innerHTML = "";

  const websiteAttr = Object.keys(websites[0]);

  for (let i = 0; i < websites.length; i++) {
    const trElement = document.createElement("tr");

    for (let j = 0; j < websiteAttr.length; j++) {
      const td = document.createElement("td");

      td.innerHTML = websites[i][websiteAttr[j]]; 

      trElement.appendChild(td);
    }

   
const handleAppendToTable3 = (website) => {
  const websiteAttr = Object.keys(website);

  const trElement = document.createElement("tr");

  for (let j = 0; j < websiteAttr.length; j++) {
    if (websiteAttr[j] === "visit") {
      trElement.innerHTML += `
        <td>
            <a href="https://${website[websiteAttr[j]]}" target="_blank">
                <img height="24" width="24" src="url.jpeg" />
            </a>
        </td>`;
    } else {
      trElement.innerHTML += `<td>${website[websiteAttr[j]]}</td>`; 
    }
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("btn", "px-5");
  const deleteBtnContainer = document.createElement("div");
  deleteBtnContainer.appendChild(deleteBtn);
  deleteBtnContainer.classList.add("justify-content-center", "text-center"); // equal to class="justify-content-center text-center"

  deleteBtn.addEventListener("click", () => trElement.remove());

  trElement.appendChild(deleteBtnContainer);

  tbodyWebsiteTable.appendChild(trElement);
};

const submitHandler = () => {
  bookmarkNameError.classList.add("d-none");
  bookmarkURLError.classList.add("d-none");

  const bookmarkNameData = bookmarkNameInput.value;
  const bookmarkURLData = bookmarkURLInput.value;

  if (bookmarkNameData.length === 0) {
    bookmarkNameError.classList.remove("d-none");
  }

  if (bookmarkURLData.length === 0) {
    bookmarkURLError.classList.remove("d-none");
  }

  if (bookmarkNameData.length === 0 || bookmarkURLData.length === 0) {
    return;
  }

  const newWebsite = {
    index: websites.length + 1,
    name: bookmarkNameData,
    visit: bookmarkURLData,
  };

  websites.push(newWebsite);
  handleAppendToTable3(newWebsite);

  bookmarkNameInput.value = "";
  bookmarkURLInput.value = "";
};

submitBtn.addEventListener("click", submitHandler);

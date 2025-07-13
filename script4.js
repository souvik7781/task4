function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">❌</button></li>`;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
const products = [
  { name: "Phone", price: 700, category: "tech" },
  { name: "Shirt", price: 30, category: "clothing" },
  { name: "Laptop", price: 1200, category: "tech" },
  { name: "Jeans", price: 50, category: "clothing" }
];

function filterAndSort() {
  const cat = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("priceSort").value;
  let filtered = cat === "all" ? products : products.filter(p => p.category === cat);
  filtered.sort((a, b) => sort === "low" ? a.price - b.price : b.price - a.price);
  displayProducts(filtered);
}

function displayProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  list.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>Category: ${p.category}</p>
      </div>`;
  });
}

window.onload = () => {
  showSection("portfolio");
  renderTasks();
  filterAndSort();
};
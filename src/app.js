document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Senyuman Mas Susilo", img: "7.jpg", price: 1000000 },
      { id: 1, name: "JayaBoga", img: "2.jpg", price: 100000 },
      { id: 1, name: "Senyuman Mba Rina", img: "3.jpg", price: 1000000 },
      { id: 1, name: "Ketampanan Mas Rheval", img: "4.jpg", price: 500000 },
      { id: 1, name: "Jasa Makan Mas Rahardian", img: "5.jpg", price: 5000000 },
      { id: 1, name: "Kasih Sayang Mas Johan", img: "6.jpg", price: 5000000 },
    ],
  }));
});

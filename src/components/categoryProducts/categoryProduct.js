const squares = document.querySelectorAll(".square-container");

function handleMouseEnter({ currentTarget }) {
  [...currentTarget.children].forEach((child) => {
    if (child.classList.contains("bottom-line")) {
      child.classList.add("active");
    }
  });
}

function handleMouseLeave({ currentTarget }) {
  [...currentTarget.children].forEach((child) => {
    if (child.classList.contains("active")) {
      child.classList.remove("active");
    }
  });
}

squares.forEach((square) => {
  square.addEventListener("mouseenter", handleMouseEnter);
});

squares.forEach((square) => {
  square.addEventListener("mouseleave", handleMouseLeave);
});
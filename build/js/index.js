document.addEventListener('DOMContentLoaded', () => {
  function addClassFunction(className, element) {
    element.classList.add(className);
  }

  function removeClassFunction(className, element) {
    element.classList.remove(className);
  }

  function addOnHoverClass() {
    const elements = document.querySelectorAll('.client__hover');

    elements.forEach((element) => {
      const list = element.querySelector('.client__list');
      element.addEventListener('mouseenter', () => {
        addClassFunction('client__hover--js', element);
        addClassFunction('client__list--js', list);
      });

      element.addEventListener('mouseleave', () => {
        removeClassFunction('client__hover--js', element);
        removeClassFunction('client__list--js', list);
      });
    });
  }

  addOnHoverClass();
});

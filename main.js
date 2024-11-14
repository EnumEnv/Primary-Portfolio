let PreviewElementsNames = [
   "home-preview",
   "about-preview",
   "projects-preview",
];

let PreviewElements = [];
let HeaderButtons = document.querySelectorAll("#flexHeader");
let CurrentVisiblePreview;

const FindPreviewElementWithElement = (element) => {
   for (let i = 0; i < PreviewElements.length; i++) {
      if (PreviewElements[i] === element) {
         return PreviewElements[i];
      }
   }
   return null;
};

PreviewElementsNames.forEach((name) => {
   const selector = document.querySelector("." + name);
   if (!selector) {
      console.warn("Failed to find query selection for", name);
      return;
   }

   if (name != "home-preview") {
      selector.style.display = "none";
   } else {
      selector.style.display = "block";
      CurrentVisiblePreview = selector;
   }

   PreviewElements.push(selector);
});

HeaderButtons.forEach((button, index) => {
   button.addEventListener("click", () => {
      let toPreviewSelector = `.${button.textContent.toLowerCase()}-preview`;
      let foundSelector = FindPreviewElementWithElement(
         document.querySelector(toPreviewSelector)
      );

      if (CurrentVisiblePreview == foundSelector) {
         return;
      }

      CurrentVisiblePreview.style.display = "none";
      CurrentVisiblePreview = foundSelector;
      CurrentVisiblePreview.style.display = "block";
   });
});

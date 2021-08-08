import "./styles.css";

const app = document.getElementById("app");
const tabButtons = app.querySelectorAll(".tab-btn");
const tabs = app.querySelectorAll(".tab-content");

// Set first tab-btn as selected and unhide the first tab
tabButtons[0].classList.toggle("selected", true);
tabs[0].classList.toggle("hidden", false);

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    // Deselect all tab buttons...
    Array.from(e.target.parentNode.children).forEach((tabBtn) => {
      tabBtn.classList.toggle("selected", false);
    });
    // Then mark this one as selected
    e.target.classList.toggle("selected", true);

    const selectedTabId = e.target.dataset.tabContentId;
    const selectedTab = document.getElementById(selectedTabId);

    // Hide all the tabs...
    Array.from(selectedTab.parentNode.children).forEach((tab) => {
      tab.classList.toggle("hidden", true);
    });
    // Unhide selected tab
    selectedTab.classList.toggle("hidden", false);
  });
});

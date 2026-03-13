// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  document.addEventListener("pointermove", function (event) {
    root.style.setProperty("--hayah-x", event.clientX + "px");
    root.style.setProperty("--hayah-y", event.clientY + "px");
  });

  // Repeat pseudo-code so each column is tall
  var codes = document.querySelectorAll(".hayah-code");
  if (codes.length > 0) {
    codes.forEach(function (el) {
      var base = el.textContent.trim() + "\n";
      var repeated = "";
      for (var i = 0; i < 40; i++) {
        repeated += base;
      }
      el.textContent = repeated;
    });
  }

  // After initial logo animation (3s), start looping glitch every ~18s
  var logoWrap = document.querySelector(".hayah-logo-wrap");
  if (logoWrap) {
    setTimeout(function () {
      logoWrap.classList.add("hayah-logo-loop");
    }, 3000);
  }

  // Toggle project screenshots (e.g., InvoiceR) without changing card height by default
  var screenshotToggles = document.querySelectorAll(".hayah-screenshot-toggle");
  screenshotToggles.forEach(function (btn) {
    var targetSelector = btn.getAttribute("data-target");
    if (!targetSelector) return;
    var target = document.querySelector(targetSelector);
    if (!target) return;

    btn.addEventListener("click", function () {
      var isHidden = target.classList.contains("d-none");
      if (isHidden) {
        target.classList.remove("d-none");
        btn.textContent = "Hide screenshots ↑";
      } else {
        target.classList.add("d-none");
        btn.textContent = "View screenshots ↓";
      }
    });
  });
});

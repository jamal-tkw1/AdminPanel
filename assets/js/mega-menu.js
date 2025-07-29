// Mega Menu Settings Panel Logic
// This script controls the mega menu settings panel and menu DOM movement

document.addEventListener('DOMContentLoaded', function() {
  const megaMenuDropdown = document.getElementById('megaMenuDropdown');
  const leftRadio = document.getElementById('megaMenuLeft');
  const centerRadio = document.getElementById('megaMenuCenter');
  const widthSelect = document.getElementById('megaMenuWidth');
  const offsetInput = document.getElementById('megaMenuOffset');
  const openSettingsBtn = document.getElementById('openMegaMenuSettings');
  const contentWrapper = document.getElementById('content-relative-wrapper');
  // Open settings panel from button
  openSettingsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('megaMenuSettings'));
    offcanvas.show();
  });

  // Helper: move mega menu to content wrapper if not already there
  function moveMegaMenuToContentWrapper() {
    if (contentWrapper && !contentWrapper.contains(megaMenuDropdown)) {
      contentWrapper.appendChild(megaMenuDropdown);
    }
  }
  // Helper: move mega menu back to nav parent if not already there
  function moveMegaMenuToNavParent() {
    const navParent = document.getElementById('megaMenuParent');
    if (navParent && !navParent.contains(megaMenuDropdown)) {
      navParent.appendChild(megaMenuDropdown);
    }
  }

  // Alignment
  function updateAlignment() {
    if (centerRadio.checked) {
      megaMenuDropdown.classList.add('mega-menu-centered');
      // Centered should be relative to content area, not nav parent
      moveMegaMenuToContentWrapper();
      // Remove full width class if present
      megaMenuDropdown.classList.remove('mega-menu-full');
      // Set width from select (600/900)
      if (widthSelect.value !== 'full') {
        megaMenuDropdown.style.minWidth = widthSelect.value + 'px';
        megaMenuDropdown.style.width = widthSelect.value + 'px';
        megaMenuDropdown.style.maxWidth = '';
      }
    } else {
      megaMenuDropdown.classList.remove('mega-menu-centered');
      // Only move back to nav parent if not full width
      if (widthSelect.value !== 'full') {
        moveMegaMenuToNavParent();
      }
    }
    // If full width is selected, let width logic handle DOM move
    updateWidth();
  }
  leftRadio.addEventListener('change', updateAlignment);
  centerRadio.addEventListener('change', updateAlignment);

  // Width
  function updateWidth() {
    megaMenuDropdown.classList.remove('mega-menu-full');
    megaMenuDropdown.style.position = '';
    megaMenuDropdown.style.left = '';
    megaMenuDropdown.style.right = '';
    megaMenuDropdown.style.minWidth = '';
    megaMenuDropdown.style.width = '';
    megaMenuDropdown.style.maxWidth = '';
    if (widthSelect.value === 'full') {
      megaMenuDropdown.classList.add('mega-menu-full');
      // Attach to content wrapper for relative full width
      moveMegaMenuToContentWrapper();
    } else {
      // If centered, keep in content wrapper, else restore to nav parent
      if (centerRadio.checked) {
        moveMegaMenuToContentWrapper();
      } else {
        moveMegaMenuToNavParent();
      }
      megaMenuDropdown.style.minWidth = widthSelect.value + 'px';
      megaMenuDropdown.style.width = widthSelect.value + 'px';
    }
  }
  widthSelect.addEventListener('change', updateWidth);

  // Offset
  function updateOffset() {
    megaMenuDropdown.style.top = offsetInput.value ? offsetInput.value + 'px' : '';
  }
  offsetInput.addEventListener('input', updateOffset);

  // Initial state
  updateAlignment();
  updateWidth();
  updateOffset();
});

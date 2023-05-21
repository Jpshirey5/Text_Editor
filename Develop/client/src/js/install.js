const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prompt the user to install the PWA
  event.prompt();
});

butInstall.addEventListener('click', async () => {
  // Handle the click event on the install button
  const promptEvent = await window.deferredPrompt;

  if (promptEvent) {
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
      console.log('PWA installed successfully!');
    } else {
      console.log('PWA installation canceled.');
    }
    window.deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  // Handle the app installed event
  console.log('PWA installed!');
});

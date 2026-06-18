// ============================================================
// FIREBASE CONFIG — edit this file with YOUR project's values
// ============================================================
// Where to find these: Firebase Console → Project settings (gear icon)
// → General tab → "Your apps" → Web app → SDK setup and configuration
//
// This file is loaded as a plain script (not a module) by every page,
// so it just needs to set window globals before the page's own module
// script runs.

window.FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Simple passcode gate for admin.html. This is NOT real security —
// anyone who reads this file can see it — it just keeps casual
// attendees from wandering into the control panel. Change it before
// the event, and don't reuse a sensitive password here.
window.ADMIN_PASSCODE = "changeme2026";

// Event name shown across the screens.
window.EVENT_NAME = "Staff Night 2026";

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
  apiKey: "AIzaSyCzMWPBDvl8l0MSwClyujz13N2M1H-YT4g",
  authDomain: "event-manager-cda51.firebaseapp.com",
  projectId: "event-manager-cda51",
  storageBucket: "event-manager-cda51.firebasestorage.app",
  messagingSenderId: "35004972816",
  appId: "1:35004972816:web:d52b69bfbbb2d6f8ab2f95",
  measurementId: "G-MQ5KT1BFE1"
};

// Simple passcode gate for admin.html. This is NOT real security —
// anyone who reads this file can see it — it just keeps casual
// attendees from wandering into the control panel. Change it before
// the event, and don't reuse a sensitive password here.
window.ADMIN_PASSCODE = "qwerty2296";

// Event name shown across the screens.
window.EVENT_NAME = "CSB Gala Night 2026";

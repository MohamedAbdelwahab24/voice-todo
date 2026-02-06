# 🎙️ Voice Command To-Do List

A smart, voice-controlled to-do list built as a Progressive Web App (PWA). Create, manage, and complete tasks using natural language voice commands.

![PWA Install](https://img.shields.io/badge/PWA-Installable-brightgreen)
![Web Speech API](https://img.shields.io/badge/Speech-Audio-blue)
![Mobile](https://img.shields.io/badge/Mobile-Android/iOS-orange)

## ✨ Features

- 🎙️ **Voice Commands** - Use natural language (e.g., "add buy groceries", "mark task 1 as done")
- 📱 **Mobile-First PWA** - Install on your phone, works offline
- 🎨 **Beautiful UI** - Modern, clean, dark mode by default
- 🔔 **Push Notifications** - Get notified when tasks are due
- 💾 **Local Storage** - Your data stays on your device
- ⚡ **Fast & Lightweight** - No server needed, runs instantly

## 🎯 Voice Commands

### Add Tasks
- "add [task name]"
- "create [task name]"
- "I need to [task name]"

### Complete Tasks
- "mark [number] as done"
- "complete [number]"
- "done with [number]"

### Delete Tasks
- "delete [number]"
- "remove [number]"
- "clear [number]"

### Other
- "show all tasks"
- "show pending"
- "show completed"
- "count tasks"
- "clear all"

## 📦 How to Use

### On Android

1. **Clone the repo:**
   ```bash
   git clone https://github.com/MohamedAbdelwahab24/voice-todo.git
   cd voice-todo
   ```

2. **Open in browser:**
   ```bash
   npx serve
   ```
   Then open http://localhost:3000 on your phone

3. **Or deploy for free:**
   - Deploy to **Netlify Drop** (drag & drop)
   - Deploy to **Vercel** (connect GitHub)
   - Deploy to **GitHub Pages**

4. **Install as PWA:**
   - Chrome → Menu → Add to Home Screen
   - Safari → Share → Add to Home Screen

### On iOS

1. Open the URL in Safari
2. Tap **Share** → **Add to Home Screen**
3. Name it "Voice To-Do"

## 🏗️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling (Flexbox/Grid)
- **JavaScript (ES6+)** - Logic & API
- **Web Speech API** - Voice recognition
- **Service Worker** - Offline support
- **PWA Manifest** - Installable app
- **Local Storage** - Data persistence

## 🚀 Features Breakdown

### Voice Recognition
- Uses browser's native Web Speech API
- Auto-detects language (English by default)
- Supports continuous listening
- Visual feedback when listening

### Task Management
- Add tasks with any description
- Mark tasks as complete/incomplete
- Delete tasks
- Filter by status (all/pending/completed)
- Persistent storage (survives browser restart)

### UI/UX
- Dark mode theme (easy on eyes)
- Smooth animations
- Mobile-optimized layout
- Voice command feedback
- Task priority levels

## 🎨 Sample UI

```
┌─────────────────────────────┐
│  🎙️ Voice To-Do            │
│                             │
│  [🎤 Microphone Button]     │
│  "Add buy groceries"        │
│  ✓ Added!                   │
│                             │
│  📝 Tasks                   │
│  1. ☐ Buy groceries         │
│  2. ☐ Call mom              │
│  3. ☐ Send email            │
│                             │
│  [Clear All] [Delete 2]    │
└─────────────────────────────┘
```

## 📄 License

MIT License - Free to use and modify

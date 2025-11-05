# WCAG Widget

A lightweight, customizable accessibility widget for websites that helps meet **WCAG (Web Content Accessibility Guidelines)** standards.  
It allows users to adjust text size, contrast, spacing, and other visual preferences to improve readability and accessibility.

---

## 🌟 Features

- Adjustable font size and line height
- Color contrast toggle
- Text and background color inversion
- Highlighting of links and titles
- Dyslexia-friendly font option
- Option to reset all settings
- Accessible keyboard navigation
- Cookie-based preference storage
- Fully customizable styles and icons
- Easy integration with existing UI

---

## 📦 Installation

1. Clone the repository or download the plugin files.
   ```bash
   git clone git@github.com:motivoart/wcag-widget.git
   ```

2. Import the plugin into your project:
   ```ts
   import Wcag from './PluginWcag'
   import { WcagOptions } from './helpers/WcagOptions'
   ```

3. Include the necessary CSS file:
   ```ts
   import './helpers/WcagStyles'
   ```

4. Add the widget container to your HTML:
   ```html
   <div wcag-widget="true"></div>
   ```

---

## ⚙️ Basic Usage

```ts
import Wcag from './PluginWcag'
import { WcagOptions } from './helpers/WcagOptions'

const wcag = new Wcag({
  headerText: 'Accessibility Options',
  bgColor: '#69B764',
  triggerOptions: {
    icon: '/img/accessibility-widget.svg',
    position: 'bottom-right'
  },
  resetButton: true,
  accessibilityOptions: [
    {
      name: 'fontSize',
      active: true,
      icon: '/img/icons/text-height.svg',
      options: {
        name: 'fontSize',
        title: 'Font Size',
        type: 'levels',
        category: 'content',
        levels: [1.1, 1.2],
        action: 'changeFontSize'
      }
    }
  ]
})
```

---

## 🧩 Options

| Option | Type | Description |
|--------|------|-------------|
| `plan` | `number` | Defines available accessibility options level |
| `headerText` | `string` | Title displayed at the top of the widget |
| `bgColor` | `string` | Background color of the widget |
| `triggerOptions` | `object` | Defines icon and position of widget trigger |
| `resetButton` | `boolean` | Enables or disables the reset button |
| `resetOptions` | `object` | Text and color for the reset button |
| `declaration` | `string` | Link or text for accessibility declaration |
| `accessibilityOptions` | `array` | List of accessibility features and behaviors |

---

## 🎨 Customization

You can easily modify:
- Widget layout via SCSS/CSS
- Icons by replacing SVG files
- Colors and text in configuration options
- Feature list (enable/disable any option)

---

## 💾 Cookie Storage

User preferences are stored in cookies (via `WcagCookies` helper),  
allowing the plugin to restore user settings between sessions.

---

## 🧠 Helpers

The plugin uses modular helpers for better structure:
- `WcagOptions` – handles plugin configuration
- `WcagStyles` – manages inline and dynamic styles
- `WcagCookies` – stores user preferences

---

## 🧑‍💻 Development

To extend the plugin:
- Add new actions inside the `accessibilityOptions` list.
- Define new visual behaviors in the `WcagStyles` helper.
- Adjust cookie logic in `WcagCookies` if adding new settings.

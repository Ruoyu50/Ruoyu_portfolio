Here is your complete **Figma Execution Manual & Wireframe Blueprint**. This document merges the logical flow of your app with a step-by-step tutorial on how to build the necessary assets from scratch.

---

# 📘 Part 1: The Design System Foundation
*Before building screens, you must set up your digital workshop.*

### 1. Spacing & Grids
We will use the **8-point Grid System**. This means all spacing and sizes should be multiples of 4 or 8 (e.g., 4, 8, 16, 24, 32).
*   **Small spacing:** 4px, 8px
*   **Medium spacing:** 16px, 24px
*   **Large spacing:** 32px, 48px, 64px

### 2. Typography (Simple Scale)
Press **T** to create text, then save these as **Text Styles** (Four dots icon in Text panel > +).
*   **Heading 1:** 24px / Bold / Line Height 120%
*   **Heading 2:** 20px / Semi-Bold / Line Height 120%
*   **Body:** 16px / Regular / Line Height 150%
*   **Caption/Label:** 12px / Medium / Line Height 140%

### 3. Color Palette (Simple)
Draw squares (R), pick a color, and save as **Color Styles**.
*   **Primary:** A strong color (e.g., Deep Blue or Purple)
*   **Text Main:** Almost Black (#111111)
*   **Text Secondary:** Grey (#757575)
*   **Background:** White (#FFFFFF) & Off-White (#F5F5F5)
*   **Status:** Green (Easy), Yellow (Hard), Red (Again)

---

# 🎨 Part 2: Icon Creation Guide
*Build your icons first. They are the atoms of your UI.*

### Why Frames?
Always draw icons inside a **Frame**, not a Group.
*   **Reason:** Frames allow you to set constraints (Center/Center) so the icon doesn't distort when resized.
*   **Standard Size:** 24x24px is the industry standard for UI icons.

### Step-by-Step: Setting up the Canvas
1.  Press **F** (Frame) and draw a 24x24 box.
2.  Rename it `Icon/Placeholder`.
3.  **Layout Grid:** Select the frame. Add a Layout Grid.
    *   Set to "Columns" -> Count: 1 (to see center line).
    *   Set to "Rows" -> Count: 1.
    *   *Alternatively:* Use a pixel grid to snap to full pixels to avoid blurry edges.

### Drawing the Core Icons
*Settings for all icons: Stroke Width = 2px, Ends = Round, Joins = Round.*

#### 1. Back Arrow
*   **Draw:** Press **P** (Pen). Click (4, 12) -> Click (20, 12). Press Esc. Draw the arrowheads: (10, 6) -> (4, 12) -> (10, 18).
*   **Cleanup:** Select all vector paths -> Union Selection -> Flatten (Cmd/Ctrl + E).
*   **Name:** `Icon/Arrow_Back`

#### 2. Menu (Hamburger)
*   **Draw:** Press **L** (Line). Draw three horizontal lines width 18px.
*   **Align:** Center them vertically. Space them 4px apart.
*   **Name:** `Icon/Menu`

#### 3. Search
*   **Draw:** Press **O** (Circle). Size 14x14. Set Stroke, remove Fill. Place at top-left.
*   **Draw:** Press **L** (Line). Draw a small diagonal tail coming off the bottom-right of the circle.
*   **Name:** `Icon/Search`

#### 4. Settings (Gear)
*   **Draw:** Press **O**. Draw a 12x12 circle (Stroke).
*   **Draw:** Press **R** (Rectangle). Draw a 4x20 rectangle centered on the circle. Duplicate and rotate 90 degrees. Duplicate both and rotate 45 degrees.
*   **Combine:** Select all -> Union Selection.
*   **Name:** `Icon/Settings`

#### 5. Add (+)
*   **Draw:** Two Rectangles (2px wide, 16px long).
*   **Align:** Center one vertically, one horizontally.
*   **Name:** `Icon/Add`

#### 6. Home / Review / Stats
*   **Home:** Draw a generic house using a Triangle (Polygon tool) on top of a Rectangle.
*   **Review:** Draw two Rectangles holding a "flashcard" shape, or a circular arrow (Pen tool).
*   **Stats:** Draw three vertical Rectangles of varying heights (Bar chart).

### Finalizing Icons
1.  **Outline Stroke:** Select your vector shape -> Right Click -> **Outline Stroke** (Shift+Cmd+O). *This converts lines to shapes so they scale correctly.*
2.  **Create Component:** Select the 24x24 Frame -> Click "Create Component" (Diamond icon at top center).
3.  **Naming Convention:** Ensure names are `Icon/Name`. This allows Figma to swap instances easily.

### 📚 Icon References
*   **Figma Community:** Search "Feather Icons" or "Material Symbols" (easiest to use).
*   **Google Fonts:** material.io/resources/icons
*   **Apple:** SF Symbols (Mac app).

---

# 🧩 Part 3: Component Creation Guide
*Now, let's build the functional blocks using Auto Layout (Shift + A).*

### 1. Button_Primary / Secondary
*   **Type:** Frame + Auto Layout.
*   **Draw:**
    1.  Type text "Button".
    2.  Select text, press **Shift + A** (Add Auto Layout).
    3.  **Settings:**
        *   Direction: Horizontal
        *   Horizontal Padding: 24px
        *   Vertical Padding: 12px
        *   Spacing: 8px (if adding an icon).
    4.  **Style:**
        *   **Primary:** Fill = Primary Color, Text = White, Radius = 8px.
        *   **Secondary:** Fill = Transparent, Stroke = Primary Color, Text = Primary Color.
5.  **Master It:** Select button -> Create Component.
    *   *Pro Tip:* Add a Variant for "State" (Default, Pressed, Disabled).

### 2. Input_Field
*   **Type:** Frame + Auto Layout.
*   **Draw:**
    1.  Type label "Email".
    2.  Type placeholder "Enter email...".
    3.  Group the Placeholder in a Frame (Height 48px, Width Fixed), add Stroke, Radius 8px. Use Auto Layout (Align Left).
    4.  Select Label + Input Frame -> **Shift + A** (Vertical Layout, Gap 4px).
5.  **Master It:** Create Component `Input/Standard`.

### 3. Word_List_Item
*   **Type:** Frame + Auto Layout.
*   **Draw:**
    1.  **Left Side:** Type "Word" (Bold) and "Definition" (Grey). Group them (Auto Layout Vertical, Gap 2px).
    2.  **Right Side:** Add `Icon/Audio` instance.
    3.  **Combine:** Select Text Group + Icon -> **Shift + A** (Horizontal).
    4.  **Settings:** Width = Fill Container, Alignment = Center Left, Gap = Auto (Space Between).
    5.  **Visuals:** Add Bottom Stroke (Grey, 1px) to act as a separator.
6.  **Master It:** Create Component `Row/Word_Item`.

### 4. Set_Card
*   **Type:** Frame + Auto Layout.
*   **Draw:**
    1.  Type Title (Bold).
    2.  Type Subtitle (Grey).
    3.  Create Progress Bar:
        *   Frame (Grey, Height 4px, Width 100%, Radius 100).
        *   Inner Rectangle (Green, Height 4px, Width 50%, Radius 100).
    4.  **Combine:** Select Title, Subtitle, Progress Bar -> **Shift + A** (Vertical, Gap 8px).
    5.  **Container:** Add Padding (16px), Fill (White), Stroke (Grey Light), Radius (12px).
6.  **Master It:** Create Component `Card/Set`.

### 5. Nav_Bar
*   **Type:** Frame + Auto Layout.
*   **Draw:**
    1.  Drag in instances of `Icon/Home`, `Icon/Sets`, `Icon/Add`, `Icon/Review`, `Icon/Stats`.
    2.  Select all -> **Shift + A** (Horizontal).
    3.  **Settings:** Width = 375px (or Fill), Height = 60-80px. Distribute Mode = Space Around. Background = White. Top Border = Grey.
    4.  **Fixed:** In the Prototype tab, check "Fix position when scrolling".

### 6. Header_Bar
*   **Type:** Frame + Auto Layout.
*   **Draw:**
    1.  Drag in `Icon/Arrow_Back` (Left).
    2.  Type "Title" (Center).
    3.  Drag in `Icon/Settings` (Right).
    4.  Select all -> **Shift + A** (Horizontal).
    5.  **Settings:** Width = Fill, Height = 56px, Padding = 16px. Gap = Auto (Space Between).

### 📚 Component References
*   **Google Material Design 3:** Search "Material 3 Figma Community". Best for grids and elevation.
*   **iOS UI Kit:** Search "Apple Design Resources". Best for native iOS sizing.

---

# 📱 Part 4: The Wireframe Blueprint (Integrated)
*Now, use the components you just built to assemble the screens. Use a Frame (Shortcut F) sized to **iPhone 14 (390px width)** for each screen.*

### 1. Screen: Home Dashboard
**Layout:** Vertical Scroll | **Navigation:** Instance of `Nav_Bar` (Home Active)

*   **Header**
    *   *Instruction:* Place `Header_Bar`. Hide Back arrow. Change Title to "Good Morning".
*   **Review Summary (Hero)**
    *   *Instruction:* Draw a Frame (Fill Primary). Inside, use Auto Layout Vertical (Center).
    *   Text: "15 Words to Review" (H1, White).
    *   Instance: `Button_Primary` (Label: "Start Review").
*   **Quick Actions**
    *   *Instruction:* Auto Layout Horizontal (Gap 16px).
    *   Instance: `Button_Secondary` ("Quick Add").
    *   Instance: `Button_Secondary` ("Stats").
*   **Section: Weak Words**
    *   *Instruction:* Auto Layout Horizontal (Overflow: Horizontal Scrolling).
    *   Content: 3x Instances of `Card/Set` (Resize to be square/smaller).

### 2. Screen: Vocab Sets Hub
**Layout:** Vertical Scroll | **Navigation:** Instance of `Nav_Bar` (Sets Active)

*   **Header**
    *   Instance: `Header_Bar` (Right Icon: Search).
*   **System Sets**
    *   *Instruction:* Auto Layout Vertical (Gap 12px).
    *   Instance: `Card/Set` (Title: "Exam Set", Progress: 80%).
    *   Instance: `Card/Set` (Title: "Daily Set").
*   **Custom Sets**
    *   *Instruction:* Grid of Cards (Auto Layout Wrap).
    *   Button: Small version of `Button_Secondary` ("+ New").

### 3. Screen: Set Detail & Word List
*   **Header**
    *   Instance: `Header_Bar` (Show Back Arrow).
*   **Controls**
    *   Instance: `Input_Field` (Placeholder: "Filter words...").
*   **The List**
    *   *Instruction:* Auto Layout Vertical (Gap 0px).
    *   Instance: `Row/Word_Item` (Text: "Abate", Def: "Become less intense").
    *   Instance: `Row/Word_Item` (Text: "Benevolent", Def: "Well meaning").
    *   *(Repeat x10)*.
*   **Floating Action Button (FAB)**
    *   *Instruction:* Draw Circle (56x56, Primary Color). Centered `Icon/Add` (White). Place in bottom right, set Constraints to "Bottom" and "Right".

### 4. Screen: Word Detail Page
*   **Header**
    *   Instance: `Header_Bar` (Right Icon: Edit/Pencil).
*   **Core Info**
    *   *Instruction:* Auto Layout Vertical (Center, Padding 32px).
    *   Text: "Ephemeral" (H1, 32px).
    *   Instance: `Icon/Audio` (Large).
*   **Cards Section**
    *   *Instruction:* Auto Layout Vertical (Gap 16px).
    *   **Definition Card:** Frame (Stroke Grey, Radius 8px). Text inside.
    *   **Example Card:** Frame (Fill Off-White). Text inside.
*   **Relations (Chips)**
    *   *Instruction:* Auto Layout Horizontal (Wrap).
    *   **Chip Component:** Text inside Frame (Radius 100, Stroke Grey).
    *   Content: [Short-lived] [Transitory] [Fleeting].

### 5. Screen: Add / Edit Word
*   **Header**
    *   Instance: `Header_Bar` (Right Text: "Cancel").
*   **Form**
    *   *Instruction:* Auto Layout Vertical (Gap 24px, Padding 16px).
    *   Instance: `Input_Field` (Label: "Word").
    *   Instance: `Input_Field` (Label: "Definition").
    *   Instance: `Input_Field` (Label: "Example").
*   **Categorization**
    *   Label: "Select Set".
    *   Row of `Chip` components (Selectable variants).
*   **Footer**
    *   Instance: `Button_Primary` ("Save Word"). Stick to bottom.

### 6. Screen: Review Mode (Active)
*   **Header**
    *   Instance: `Header_Bar` (Icon Left: Close 'X').
    *   *Progress:* Simple Rectangle (Green) spanning width.
*   **Flashcard**
    *   *Instruction:* Large Frame (Aspect Ratio 3:4). Centered on screen.
    *   **Front:** Text "Serendipity" (Center).
    *   **Back:** Text "Serendipity" + Definition + Example.
*   **Interaction Area**
    *   *Instruction:* Place at bottom.
    *   **State 1:** `Button_Primary` ("Show Answer").
    *   **State 2:** Auto Layout Horizontal -> 4 Buttons (Again/Hard/Good/Easy).

### 7. Screen: Stats & Progress
**Navigation:** Instance of `Nav_Bar` (Stats Active)

*   **Overview**
    *   Instance: `Card/Set` (Modified: Height auto).
    *   Text: "Total Words: 540".
*   **Chart Placeholder**
    *   Draw Circle (Stroke 20px). Segment colors: Green, Blue, Red.
*   **List**
    *   Instance: `Row/Word_Item` (Modified to show Set names and percentages).

---

# 🚀 Workflow Checklist for You

1.  **File Setup:** Open Figma -> New Design File.
2.  **Create Page 1 (Assets):** Build your Color Styles and Text Styles here.
3.  **Create Page 2 (Components):**
    *   Follow **Part 2** to draw all icons. Convert to Components.
    *   Follow **Part 3** to build Buttons, Inputs, Cards. Convert to Components.
4.  **Create Page 3 (Wireframes):**
    *   Press **F**, select iPhone 14.
    *   Drag in your components from the "Assets" panel (Left sidebar).
    *   Adjust text overrides and width (Fill Container).
    *   Follow **Part 4** to layout every screen.
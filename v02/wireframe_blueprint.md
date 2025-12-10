Here is a structured **Wireframe Blueprint** designed for immediate implementation in Figma.

### 🛠 Figma System Setup
Before building screens, create these **Master Components** to ensure consistency and easy Auto Layout grouping.

*   **`Nav_Bar`**: Fixed bottom container with icons: Home, Sets, Add (+), Review, Stats.
*   **`Header_Bar`**: Top container with Title, Back Arrow (left), and Action Icon (right, e.g., Settings/Menu).
*   **`Word_List_Item`**: Horizontal card containing Word (Bold), Brief Definition (Grey), and Status Indicator (Color Dot).
*   **`Set_Card`**: Box containing Set Title, Word Count, and Progress Bar.
*   **`Button_Primary`**: Large, filled background.
*   **`Button_Secondary`**: Outline or ghost button.
*   **`Input_Field`**: Label + Text Box.

---

### 1. Screen: Home Dashboard
**Layout:** Vertical Scroll | **Navigation:** Bottom Nav Active: "Home"

*   **Header**
    *   Text: "Good Morning, [User]"
    *   (Icon) Settings/Profile
*   **Review Summary (Hero Section)**
    *   *Auto Layout (Vertical, Center)*
    *   Text: "15 Words to Review"
    *   Text: "Current Streak: 12 Days"
    *   `[Button_Primary]`: "Start Review Session"
*   **Quick Actions**
    *   *Auto Layout (Horizontal)*
    *   `[Button_Secondary]`: "Quick Add Word" (Triggers Modal)
    *   `[Button_Secondary]`: "View Stats"
*   **Section: Suggested Practice**
    *   Header: "Weak Words"
    *   *Horizontal Scroll Container*
    *   `[Card_Component]`: Word + "Accuracy 40%" (Repeat x3)

---

### 2. Screen: Vocab Sets Hub
**Layout:** Vertical Scroll | **Navigation:** Bottom Nav Active: "Sets"

*   **Header**
    *   Text: "Your Library"
    *   (Icon) Search
*   **Section: System Sets**
    *   `[Set_Card]`: **Exam Set** (Subtitle: "High Priority")
    *   `[Set_Card]`: **Daily Set** (Subtitle: "Casual Learning")
*   **Section: Custom Sets**
    *   *Auto Layout (Horizontal, Space Between)*
    *   Header: "My Collections"
    *   `[Small_Button]`: "+ New Set"
    *   *List Container*
        *   `[Set_Card]`: "Travel Vocabulary"
        *   `[Set_Card]`: "Technical Terms"
*   **[Optional] Footer**
    *   Text Link: "Backup & Sync Settings"

---

### 3. Screen: Set Detail & Word List
**Flow:** Accessed by clicking a Set in Screen 2.

*   **Header**
    *   (Icon) Back Arrow
    *   Title: "[Set Name]" (e.g., Exam Set)
    *   (Icon) Menu (Dropdown: Import / Export / Share)
*   **Controls**
    *   *Auto Layout (Horizontal)*
    *   `[Search_Bar]`: "Filter words..."
    *   `[Dropdown]`: Sort by (Date Added / A-Z / Mastery)
*   **The List**
    *   *Auto Layout (Vertical)*
    *   `[Word_List_Item]`: Word A | Def | Audio Icon
    *   `[Word_List_Item]`: Word B | Def | Audio Icon
    *   ...
*   **Floating Action Button (FAB)**
    *   (Icon) + (Add word specifically to this set)

---

### 4. Screen: Word Detail Page
**Flow:** Accessed by clicking a word in Screen 3.

*   **Header**
    *   (Icon) Back Arrow
    *   (Icon) Edit (Pencil)
*   **Core Info**
    *   *Auto Layout (Vertical, Center)*
    *   Text (H1): **[Word]**
    *   (Icon) Audio Play Button
    *   Text (Italic): *Part of Speech (e.g., noun)*
*   **Meaning Context**
    *   *Card Container*
    *   Label: "Definition" -> Text: [Definition content]
    *   Label: "Example" -> Text: "[Example Sentence]"
    *   **[Optional]** `{Image Placeholder}`: User uploaded image
*   **Relations (The Knowledge Graph)**
    *   Label: "Word Family" -> `[Chip]`: Word form A, `[Chip]`: Word form B
    *   Label: "Synonyms" -> `[Chip]`: Synonym A
    *   Label: "Antonyms" -> `[Chip]`: Antonym B
*   **User Data**
    *   Label: "My Notes" -> Text: [User input notes]
    *   Label: "Sets" -> `[Tag]`: Exam Set, `[Tag]`: Daily Set
*   **Actions**
    *   `[Button_Secondary]`: "Add to another set"
    *   `[Button_Ghost]`: "Delete Word"
*   **[Future Vision]**
    *   *Placeholder Box*: "Semantic Map Visualization (Coming Soon)"
    *   *Placeholder Box*: "XR Spatial Note View"

---

### 5. Screen: Add / Edit Word
**Flow:** Accessed via "+" in Nav or "Quick Add".

*   **Header**
    *   Title: "New Entry"
    *   Text Link: "Cancel"
*   **Form Fields**
    *   *Auto Layout (Vertical, Spacing 16px)*
    *   `[Input_Field]`: Word
    *   `[Input_Field]`: Definition (Auto-fetch button icon)
    *   `[Input_Field]`: Example Sentence
    *   **[Optional]** `[Upload_Area]`: "Attach Audio/Image"
*   **Categorization**
    *   Label: "Add to Sets"
    *   *Wrap Layout*
    *   `[Selectable_Chip]`: Exam (Selected)
    *   `[Selectable_Chip]`: Daily
    *   `[Selectable_Chip]`: Custom...
*   **Metadata (Expandable Accordion)**
    *   Label: "Advanced Details (Synonyms, Notes, Word Family) v"
*   **Sticky Footer**
    *   `[Button_Primary]`: "Save Word"

---

### 6. Screen: Review Mode (Active)
**Flow:** Accessed via "Start Review" on Home.

*   **Header**
    *   (Icon) Close (X)
    *   `[Progress_Bar]`: 5/20 Words
*   **Review Card Area (Center Screen)**
    *   *Container (Aspect Ratio ~3:4)*
    *   **State A (Front):**
        *   Text (Huge): **[Word]**
        *   (Icon) Audio
    *   **State B (Back - After Flip/Input):**
        *   Text: **[Word]**
        *   Text: [Definition]
        *   Text: "[Example Sentence]"
        *   **[Future]** *Knowledge Graph Mini-View*
*   **Interaction Area (Bottom)**
    *   **Scenario A: Flip Mode**
        *   `[Button_Large]`: "Show Answer" (Initially visible)
        *   *On Flip reveal:*
            *   `[Button_Color_Red]`: Again
            *   `[Button_Color_Yellow]`: Hard
            *   `[Button_Color_Blue]`: Good
            *   `[Button_Color_Green]`: Easy
    *   **Scenario B: Typing Mode**
        *   `[Input_Field]`: "Type the meaning/word..."
        *   `[Button]`: Check

---

### 7. Screen: Review Summary
**Flow:** Appears after Review Queue finishes.

*   **Content**
    *   Text (H1): "Session Complete!"
    *   *Circle Chart*: 85% Correct
    *   Grid:
        *   New Learned: 5
        *   Review Count: 15
        *   Next Review: "Tomorrow"
*   **Actions**
    *   `[Button_Primary]`: "Back Home"
    *   `[Button_Secondary]`: "Review Mistakes"

---

### 8. Screen: Stats & Progress
**Navigation:** Bottom Nav Active: "Stats"

*   **Overview**
    *   *Card Container*
    *   Total Words: 540
    *   Current Streak: 12 Days
*   **Mastery Breakdown**
    *   *Donut Chart Component*
    *   Legend: Mastered (Green), Learning (Blue), Weak (Red)
*   **Set Performance (List)**
    *   `[List_Item]`: Exam Set - 80% Mastered
    *   `[List_Item]`: Daily Set - 45% Mastered
*   **[Future]**
    *   *Placeholder*: "Knowledge Graph Complexity Score"

---

### 📐 Figma Auto Layout Tips

1.  **Page Container:**
    *   Use a Frame (e.g., iPhone 14 size).
    *   Apply **Auto Layout (Vertical)**.
    *   Set background color (e.g., Off-white/Light Grey).

2.  **Lists (Words/Sets):**
    *   Create a container Frame.
    *   **Auto Layout:** Vertical, Gap: 8px or 12px.
    *   Constraint: Fill Container width.

3.  **Tags/Chips (Synonyms/Sets):**
    *   Create a container Frame.
    *   **Auto Layout:** Horizontal + **Wrap**.
    *   Gap: 8px.

4.  **Bottom Navigation:**
    *   Fix position to "Bottom".
    *   Constraint: Left and Right.
    *   Ensure it sits *above* the scrollable content.
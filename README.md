# LaunchCode React Practice: Using State in Forms

## Overview

This is starter code for practicing React state management and controlled form inputs. You'll build a dynamic feedback form that demonstrates real-time state updates and form validation.
Official assignment is available at `https://launchcode.instructure.com/courses/234/assignments/20269?module_item_id=14531`

## Learning Objectives

- Practice using `useState` with object state
- Implement controlled form inputs
- Handle form events with `onChange`
- Display real-time form data preview
- Implement form validation and conditional rendering

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

## Your Tasks

### Part 1: Complete the Form Logic

The `FeedbackForm.jsx` component has been started for you. Complete the following:

1. **Implement `handleChange` function**
   - Use the spread operator to update `formData` state
   - Use `event.target.name` and `event.target.value`

2. **Calculate remaining characters**
   - Implement character counter for feedback textarea (200 character limit)

3. **Form validation**
   - Fix the `isFormComplete` logic to check if all fields have values

4. **Add form submission**
   - Add `onSubmit` event to the form element
   - Call `handleSubmit` function

### Part 2: Real-time Preview

Update the preview section to display:

- User's name
- User's email  
- User's feedback text

### Part 3: Styling (Optional)

The basic layout is provided, but feel free to enhance:

- Form styling and spacing
- Preview panel appearance
- Responsive design improvements

## Key Concepts to Practice

- **Controlled Components**: Form inputs controlled by React state
- **Event Handling**: Using `onChange` and `onSubmit`
- **Conditional Rendering**: Disable/enable submit button
- **Object State Management**: Single state object for multiple form fields

## Success Criteria

Your completed form should:

- ✅ Update state as user types in any field
- ✅ Show real-time preview of form data
- ✅ Display character count for feedback field
- ✅ Disable submit button when fields are empty
- ✅ Handle form submission (console log for now)

## Tips

- Remember to use the `name` attribute on inputs to match your state keys
- Use bracket notation when accessing dynamic object properties
- The spread operator (`...`) is your friend for updating object state
- Check the browser console for any errors

Happy coding! 🚀

export const componentsDetails = [
  {
    componentType: "input",
    iconContent: "Aa",
    headDescription: "Text Input",
    description: "Supports Markdown or HTML.",
    componentData: [
      {
        label: "Text Input Label: ",
        placeholder: "Enter text here ",
      },
    ],
  },
  {
    componentType: "button",
    iconContent: "ACTION",
    styles:
      "bg-blue-600 text-white px-3 py-2 font-normal rounded text-[6px] tracking-wide",
    headDescription: "Button",
    description: "Trigger actions like run queries, export data etc.",
    componentData: [
      {
        buttonText: "Button",
        borderRadius: 4,
        backgroundColor: "#2563EB",
      },
    ],
  },
  {
    componentType: "dropdown",
    iconSvg:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>',
    styles: "p-1 bg-black text-white rounded",
    headDescription: "Dropdown",
    description: "Select from a set of options, with a dropdown",
    componentData: [
      {
        labelText: "SELECT",
        options: ["Option 1", "Option 2", "Option 3"],
      },
    ],
  },
  {
    componentType: "table",
    iconSvg:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"></path></svg>',
    styles: "p-1 text-gray-400 rounded",
    headDescription: "Table",
    description: "Display tabular data with pagination.",
  },
];

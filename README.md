# Food and Vitamin Explorer

A project my partner and I created for AP Computer Science Principles (AP CSP). The app lets users explore vitamin information for foods and drinks and search for items that contain a selected vitamin.

## Things You Should Know

1. We built this project on **studio.code.org** using block code, then converted the blocks to **JavaScript**.
2. I completed this project **with a partner** for an **AP CSP class**.
3. I earned a **4 on the AP CSP exam** and finished the class with a **98% overall grade**.

## Features

- Choose **Food** or **Drink** from a category dropdown to navigate between screens.
- Select **Salmon**, **Fried Chicken**, **Hot Chocolate**, or **Lemonade** to view the vitamin information stored for that item.
- Search by vitamin to display matching food names.
- Use back buttons to return to the category screen.

## How It Works

The program loads the **Food** and **Vitamins** columns from the **Vitamin Data for Different Foods** table into two lists. Matching positions in those lists connect each food to its vitamin information.

Button clicks and dropdown changes trigger event handlers that switch screens, display information, or run a search.

The main functions are:

- `showResultScreen(text)`: Opens the result screen and displays the supplied text.
- `showFoodInfo(foodName)`: Loops through the food names and displays the vitamin information for a matching item.
- `searchByVitamin(userSearch)`: Loops through the vitamin data, uses a case-insensitive text search, and displays the matching food names.

## Programming Concepts

This project uses variables, lists, event handlers, functions with parameters, loops, conditionals, and string operations to organize data and respond to user input.

## Running the Project

The code is designed for **Code.org App Lab**. It requires the original screen layouts, interface elements, and the **Vitamin Data for Different Foods** data table. The JavaScript in the PDF alone does not include those resources and will not run as a standalone web page.

In the complete App Lab project:

1. Click **Run**.
2. Choose a food or drink category and select an item to view its vitamin information.
3. Open the search screen and choose a vitamin to see matching items.
4. Use a back button to return to the category screen.

# Getting Started with the Hive Challenge Demo 🐝

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) ⚛️

## Available Scripts 📝

To run this project directory, please run:

### `yarn start` 🧶

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Requirements 🤔
### Design and Interface 💻
- A user should be able to open and close the dropdown menu ✅
    - Please open and close the dropdown menus by:
    - multi: clicking outside of the dropdown selection list
    - single: clicking outside of the dropdown selection list or by making a selection

- The component must support a single selected option or multiple selected options. Please demonstrate both use cases separately ✅
    - Please refer to both our multi-select and single-select dropdown component variants
    - The variants are switchable by the prop `variant` which is intented to be of value `single` or `multi`

- A user should be able to select and deselect all options at once ✅
    - We opted for this functionality for the multi-select variant as the single-select just needs one result value. There is a `select all` and `deselect all` button in multi-select dropdown table

- The selected option or options must be visible when the dropdown is closed ✅
    - The selection result is displayed in the text area of the dropdown select button

## API (via Component Props) 🗺
- The component should support both single select and multi select ✅
    - Yes, we have both the single and multi select options opted by setting the `variant` prop to `single` or `multi`
- The component should have a flexible API, making it reusable across different parts of one or more applications. Consider it part of a component library ✅
    - We have props for easy adjustability of the `placeholderText`: text for the dropdown select button area when there is no select made, `optionTitleList`: the desired items for the dropdown to list , and `variant`: to desginate the functionality of a multi select dropdown (including select all and deselect all buttons) or of a single select dropdown
## Performance 🏃‍♂️
- The component should render large lists efficiently ✅
    - The styling of the dropdown has a maximum table height and maximum button height to allow for proper sizing when there are more dropdown items.
- The component should not perform excessive computations ✅
    - The dropdown was implemented with simple React functionalities and functions without any large dependancies or packages.
## Readability 👀
- The code should be readable and a fellow developer should be able to dive right into
your code ✅
    - The code was written with Clean Code first thinking

## Learn More 🙋‍♂️

You can learn more about me, Chris Ren, by taking a look at my projects at my [Github](https://github.com/renchris) or my work experience at my [LinkedIn](https://www.linkedin.com/in/ren-chris/)

# CHANGELOG for Cart Quantity Project - Version 5

## Version 5

### Changed

- **DOM Integration**: Updated the `showqty()` function to display the cart quantity in a paragraph with the class `.js-output` instead of logging it to the console.

### Added

- **HTML Update**: Added a `<p class="js-output"></p>` element to the HTML to show the cart quantity dynamically on the page.

### Removed

- **Console Logging**: Removed the console logging from the `showqty()` function.

### Updated

- **JavaScript Code**: Refactored the `showqty()` function to update the inner HTML of the `.js-output` element with the current cart quantity. This replaces the use of console logging.

## Version 4

### Changed

- **Function Consolidation**: Combined individual add and remove functions into `updateCartQuantity(qty)` to handle varying quantities dynamically.
- **Code Cleanup**: Commented out old functions from Version 3 to maintain backward compatibility while introducing new functionality.
- **Validation Enhancements**: Updated validation to handle cases where adding or removing items would exceed the cart's capacity or go below zero.

### Added

- **New Functionality**: Added `updateCartQuantity(qty)` function to dynamically update the cart quantity and validate changes.
- **Improved User Alerts**: Enhanced alerts for full cart and insufficient items scenarios to improve user experience.

## Version 3

### Added

- **Validation**: Implemented checks to prevent adding more items than the cart's maximum capacity (10 items) and to ensure sufficient items are available for removal.
- **User Alerts**: Added alert messages for full cart and insufficient items scenarios.
- **UI Update**: Switched from `console.log` to updating a page element for cart quantity display.

### Changed

- **Functionality**: Updated functions to improve user experience with validation and alerts.

## Version 2

### Added

- **New Features**: Introduced additional buttons for adding and removing items in increments of 4 and 5, and new functions to handle these actions.
- **Buttons**: Added `+4`, `+5`, `-2`, and `-3` buttons to the HTML.

## Version 1

### Changed

- **Separation of Concerns**: Moved JavaScript functions from inline HTML to a separate `script.js` file for better code organization and maintenance.
- **Functionality**: Created individual functions for adding and removing items, updating the cart quantity.

## Version 0

### Initial Release

- **Features**: Implemented basic cart functionality with buttons to add items, remove items, reset the cart, and display the current cart quantity.
- **Code**: All JavaScript code was embedded directly within the HTML file.

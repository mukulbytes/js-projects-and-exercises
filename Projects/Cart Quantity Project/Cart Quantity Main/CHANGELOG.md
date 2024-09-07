# CHANGELOG

## [Version 5]
### Changed
- **UI Updates**: Added a `<p>` element with the class `js-cart-output` to display the cart quantity directly on the page.
- **Function Refactor**: Replaced `console.log` in the `showqty()` function with `innerHTML` to update the page element.

### Fixed
- **Output Visibility**: Ensured that cart quantity is displayed on the web page instead of in the console.

## [Version 4]
### Changed
- **Function Consolidation**: Combined individual add and remove functions into `addToCartRevised(qty)` and `removeFormCartRevised(qty)` to handle varying quantities dynamically.
- **Code Cleanup**: Commented out old functions from Version 3 to maintain backward compatibility while introducing new functionality.

## [Version 3]
### Added
- **Validation**: Implemented checks to prevent adding more items than the cart's maximum capacity (10 items) and to ensure sufficient items are available for removal.
- **User Alerts**: Added alert messages for full cart and insufficient items scenarios.
- **UI Update**: Switched from `console.log` to updating a page element for cart quantity display.

## [Version 2]
### Added
- **New Features**: Introduced additional buttons for adding and removing items in increments of 4 and 5, and new functions to handle these actions.
- **Buttons**: Added `+4`, `+5`, `-2`, and `-3` buttons to the HTML.

## [Version 1]
### Changed
- **Separation of Concerns**: Moved JavaScript functions from inline HTML to a separate `script.js` file for better code organization and maintenance.
- **Functionality**: Created individual functions for adding and removing items, updating the cart quantity.

## [Version 0]
### Initial Release
- **Features**: Implemented basic cart functionality with buttons to add items, remove items, reset the cart, and display the current cart quantity.
- **Code**: All JavaScript code was embedded directly within the HTML file.

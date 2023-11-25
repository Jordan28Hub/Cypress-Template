export const {
    //export variables for use in a test script within Tests Folder
    exampleConst = ("https://www.google.co.uk")

} = {};

export function exampleFunction() {
    //a function to export a list of commands or executions to be used in a test script within Test Folder
    const urlTest = cy.visit("https://www.google.co.uk");
}
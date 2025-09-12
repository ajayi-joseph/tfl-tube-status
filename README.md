# TfL Tube Status React App

A React application that displays the status of London Underground lines using the official TfL API.

---

## Prerequisites
- Node.js (v16 or later recommended)
- npm (v7 or later)

## Setup & Configuration

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ajayi-joseph/tfl-tube-status.git
   cd tfl-tube-status
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:
     ```sh
     cp .env.example .env
     ```
   - Edit `.env` and add your TfL App ID and API key:
     ```env
     REACT_APP_TFL_API_URL=https://api.tfl.gov.uk
     REACT_APP_TFL_APP_ID=your-app-id-here
     REACT_APP_TFL_API_KEY=your-api-key-here
     ```

---

## How to Build the Code

To build the app for production:
```sh
npm run build
```
- Output will be in the `build/` directory.

## How to Run the App

To start the development server:
```sh
npm start
```
- Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Run Tests

### Unit/Component Tests
- Only presentational and utility components (e.g., `LineItem`) are unit tested due to Create React App limitations.
- To run unit tests:
  ```sh
  npm test
  ```

### End-to-End (E2E) Tests with Cypress
- E2E tests cover the full app, including API and UI integration.
- To run E2E tests:
  1. Start the app: `npm start`
  2. In another terminal:
     ```sh
     npx cypress open
     ```
     - Select a test (e.g., `tube-status.cy.js`) to run in the Cypress UI.
  3. Or run all E2E tests headlessly:
     ```sh
     npx cypress run
     ```
- E2E tests are located in `cypress/e2e/`.

---

## Assumptions
- The app expects valid TfL API credentials in the `.env` file.
- Only presentational components are unit tested due to Create React App's Jest/ESM transform limitations.
- E2E tests are used for container components and API integration.
- The app is intended for modern browsers.

---


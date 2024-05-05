# CPSC559 Lottery Game

Welcome to the CPSC559 Lottery Game project! This project implements a lottery game using Next.js for the front-end and Solidity with thirdweb for the contract backend.

## Team Members
1. Anuj Patel
   - CWID: 885177014
   - Email: anuj11@csu.fullerton.edu
2. Purva Surve
   - CWID: 885200808
   - Email: purvass@csu.fullerton.edu
3. Keshav Daga
   - CWID: 885177477
   - Email: kd81@csu.fullerton.edu
4. Kavil Jain
   - CWID: 885177303
   - Email: kavil.jain@csu.fullerton.edu

## Project Links
- Front-end using Next.js: [GitHub Repository](https://github.com/anu581999/CPSC559)
- Contract Solidity using thirdweb: [GitHub Repository](https://github.com/anu581999/CPSC559_backend)

## Instructions to Run the Project
1. Clone the [CPSC559_backend](https://github.com/anu581999/CPSC559_backend) project.
2. Open the path of the cloned project in the terminal.
3. Run `npm install` to install all the dependencies of the project.
4. Run `npx thirdweb@latest deploy` to deploy the contract in thirdweb.
5. Once the contract is deployed, copy the address of the contract to clipboard.
6. Clone the [CPSC559](https://github.com/anu581999/CPSC559) project.
7. Open the path of the cloned project in the terminal.
8. Run `npm install` to install all the dependencies of the project.
9. Open `addresses.ts` file located under `const` folder.
10. Paste the copied contract address in `RAFFLE_CONTRACT_ADDRESS`.
11. Now run the project using `npm run dev`.
12. Enjoy the lottery game!

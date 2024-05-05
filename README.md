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

This project involves the creation of a Lottery app deployed on ThirdWeb's NFT contract, built entirely from scratch.

## Features:
1. User-Friendly UI: The app boasts an intuitive user interface enriched with photos, GIFs, and comprehensive instructions on how to navigate and utilize the platform effectively.

2. Contract Deployment: Contracts were meticulously crafted and deployed on the Polygon Amoy TestNet using the ThirdWeb development platform.

3. User Console:
- Connect Wallet: Users are required to connect their wallets before participating in the lottery.
- Ticket Selection: Allows users to select the number of tickets with convenient increment and decrement buttons.
- Raffle Status: Provides real-time updates on the status of the lottery (green denotes lottery in progress, red signifies lottery closed).
- Ticket Price Display: Displays the price per ticket for transparency.
- Live Updates: Users can monitor the number of entries (tickets sold) in real-time.

4. Admin Console:
- Lottery Management: Admins have the authority to initiate or conclude the lottery.
- Entry Price Control: Allows setting and adjusting the entry price for the lottery.
- Prize Transfer: Enables transferring the prize amount to the winner's account seamlessly.
- Unique User Display: Each user is presented with a unique photo display for added personalization.
- Account Management: Admins can withdraw remaining funds from the admin account as needed.
- Token and Wallet Validation: Admins can validate token IDs and wallet addresses to initiate the lottery.
- Winner Selection: Facilitates the process of selecting the winner(s) through a dedicated button.
- Entry Price Lock: Prevents updating the entry price once the lottery has commenced.

5. Exception Handling: Robust exception handling mechanisms are implemented to ensure smooth operation and to address edge case scenarios effectively.

## Future Enhancements:
- Support for Multiple Cryptocurrencies: Integration of additional types of cryptocurrencies to provide users with more options for participation and payments.

Feel free to contribute or suggest further improvements!

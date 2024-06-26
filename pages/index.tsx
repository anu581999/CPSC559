import { ConnectWallet, MediaRenderer, Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Box, Button, Container, Flex, Input, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { HERO_IMAGE_URL, RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";
import RaffleStatus from "../components/rafflestatus";
import { fontSize } from "@thirdweb-dev/react/dist/declarations/src/design-system";
import { useState } from "react";
import PrizeNFT from "../components/prizeNFT";
import CurrentEntries from "../components/currentEntries";

const Home: NextPage = () => {
  const address = useAddress();

  const {
    contract
  } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const {
    data: entryCost,
    isLoading: isLoadingEntryCost
  } = useContractRead(contract, "entryCost");
  const entryCostInEther = entryCost ? ethers.utils.formatEther(entryCost) : "0";

  const{
    data: raffleStatus,
  } = useContractRead(contract, "raffleStatus");

  const {
    data: totalEntries,
    isLoading: isLoadingTotalEntries
  } = useContractRead(contract, "totalEntries");

  const [entryAmount, setEntryAmount] = useState(0);
  const entryCostOnSubmit = parseFloat(entryCostInEther) * entryAmount;

  function increaseEntryAmount() {
    setEntryAmount(entryAmount + 1);
  }

  function decreaseEntryAmount() {
    if (entryAmount > 0) {
      setEntryAmount(entryAmount - 1);
    }
  }

  return (
    <Container bgImage={"images/giphy-1.gif"} opacity={1} maxW={"1440px"} py={8}>
      <SimpleGrid columns={2} spacing={4} minH={"60vh"}>
        <Flex>
          {
            raffleStatus ? (
              <PrizeNFT/>
            ) : (
            <MediaRenderer
              src={"images/cryptocurrency.png"}
              width="100%"
              height="100%"
            />
          )}
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} p={"5%"}>
          <Stack spacing={10}>
            <Box>
            <Text fontSize={"xl"}>Lottery DApp</Text>
            <Text fontSize={"4xl"} fontWeight={"bold"}>Purchase a ticket for the opportunity to win the NFT Prize!</Text>
            </Box>
            <Text fontSize={"xl"}>Buy entries for a shot at claiming the NFT! A winner will be chosen and the NFT transferred to them. The greater the number of entries, the better your chances of winning the prize.</Text>
            <RaffleStatus raffleStatus={raffleStatus} />
            {!isLoadingEntryCost && (
              <Text fontSize={"2xl"} fontWeight={"bold"}> Cost Per Entry: {entryCostInEther} MATIC</Text>
            )}
            {address ? (
              <Flex flexDirection={"row"}>
                <Flex flexDirection={"row"} w={"25%"} mr={"40px"}>
                  <Button
                   onClick={decreaseEntryAmount}
                  >-</Button>
                  <Input
                   type={"number"}
                   value={entryAmount}
                   onChange={(e) => setEntryAmount(parseInt(e.target.value))}
                   textAlign={"center"}
                   mx={2}
                  />
                  <Button
                   onClick={increaseEntryAmount}
                  >+</Button>
                </Flex>
                <Web3Button
                contractAddress={RAFFLE_CONTRACT_ADDRESS}
                action={(contract) => contract.call(
                  "buyEntry",
                  [
                    entryAmount
                  ],
                  {
                    value: ethers.utils.parseEther(entryCostOnSubmit.toString())
                  }
                )}
                isDisabled={!raffleStatus}
                >{'Buy Ticket(s)'}</Web3Button>
              </Flex>
            ):(
              <Text fontSize={"xl"}>Connect your wallet to buy entries!</Text>
            )}
            {!isLoadingTotalEntries && (
              <Text fontSize={"xl"}>Total Entries: {totalEntries.toString()}</Text>
            )}
          </Stack>
        </Flex>
      </SimpleGrid>
      <Stack mt={"40px"} textAlign={"center"}>
        <Text fontSize={"xl"}>Current Raffle Entries:</Text>
        <CurrentEntries/>
      </Stack>
    </Container>
  );
};

export default Home;

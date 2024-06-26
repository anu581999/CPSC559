import { useContract, useContractRead } from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
import { Box, Card, Text } from "@chakra-ui/react";
import AdminRaffleNFTTransfer from "./adminRaffleNFTTransfer";

export default function AdminRaffleWinner() {
    const {
        contract: raffleContract
    } = useContract(RAFFLE_CONTRACT_ADDRESS);

    const {
        data: prizeNftContractAddress
    } = useContractRead(raffleContract, "nftAddress");
    const {
        data: prizeNftTokenId
    } = useContractRead(raffleContract, "nftId");

    return (
        <Card p={4} mt={4} w={"40%"}>
            <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>Lottery Winner</Text>
            {prizeNftContractAddress == "0x0000000000000000000000000000000000000000" ? (
                <Box>
                    <Text fontSize={"xl"} fontWeight={"bold"}>No prize to lottery.</Text>
                    <Text>Please start a new raffle and select the NFT that will be raffled off.</Text>
                </Box>
            ) : (
                <AdminRaffleNFTTransfer
                    nftContractAddress={prizeNftContractAddress}
                    tokenId={prizeNftTokenId}
                />
            )}
            
        </Card>
    )
}
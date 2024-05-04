import { Box, Stack, Text } from "@chakra-ui/react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";

export default function AdminWithdrawBalance() {
    const {
        contract
    } = useContract(RAFFLE_CONTRACT_ADDRESS);

    const {
        data: contractBalance,
        isLoading: isLoadingContractBalance
    } = useContractRead(contract, "getbalance");

    console.log(contractBalance)
    
    return (
        <Stack spacing={4}>
            <Box>
                <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>Contract Balance:</Text>
                {!isLoadingContractBalance && (
                    <Text fontSize={"xl"}>{ethers.utils.formatEther(contractBalance)} MATIC</Text>
                )}
            </Box>
            <Web3Button
                contractAddress={RAFFLE_CONTRACT_ADDRESS}
                action={(contract) => contract.call(
                    "withdrawnBalance"
                )}
            >Withdraw Balance</Web3Button>
        </Stack>
        
    )
}
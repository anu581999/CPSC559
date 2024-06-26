import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
import { useState } from "react";
import { Box, Input, Stack, Text } from "@chakra-ui/react";
import { ethers } from "ethers";

export default function AdminEntryCost(){
    const {
        contract
    } = useContract(RAFFLE_CONTRACT_ADDRESS);

    const {
        data: entryCost,
        isLoading: isLoadingEntryCost
    } = useContractRead(contract, "entryCost")

    const {
        data: raffleStatus
    } = useContractRead(contract, "raffleStatus")

    const [entryCostValue, setEntryCostValue] = useState(0);

    function resetEntryCost() {
        setEntryCostValue(0.000001);
    }

    return (
        <Stack spacing={4}>
            <Box>
                <Text fontSize={"xl"} fontWeight={"bold"}>Entry Cost:</Text>
                {!isLoadingEntryCost && (
                    <Text>{ethers.utils.formatEther(entryCost)} MATIC</Text>
                )}
            </Box>
            <Input 
                type="number"
                inputMode="decimal"
                value={entryCostValue}
                onChange={(e) => setEntryCostValue(parseFloat(e.target.value))}
            />
            <Web3Button
                contractAddress={RAFFLE_CONTRACT_ADDRESS}
                action={(contract) => contract.call("changeEntryCost",
                    [
                        ethers.utils.parseEther(entryCostValue.toString())
                    ]
                )}
                isDisabled={raffleStatus}
            >Update Entry Cost</Web3Button>
        </Stack>
    )
}

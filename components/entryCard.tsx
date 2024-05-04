import { useContract, useContractRead } from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
import { Card, Flex, Text } from "@chakra-ui/react";

type Props = {
    walletAddress: string;
};

export default function EntryCard({walletAddress}: Props) {
    const {
        contract
    } = useContract(RAFFLE_CONTRACT_ADDRESS);

    const {
        data: numberOfEntries,
        isLoading: isLoadingNumberOfEntries
    } = useContractRead(contract, "entryCount", [walletAddress]);

    function truncateAddress(address: string) {
        return address.slice(0, 6) + "..." + address.slice(-4);
    };

    return (
        <Card p={8} mb={4}>
            {!isLoadingNumberOfEntries && (
                <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Text border={"1px solid"} borderRadius={"6px"} p={2} mr={2}>{truncateAddress(walletAddress)}</Text>
                    <Text>Entries: {numberOfEntries.toNumber()}</Text>
                </Flex>
            )}
        </Card>
    )
} 
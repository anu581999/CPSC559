import { useContract, useContractRead } from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
import { Container } from "@chakra-ui/react";
import EntryCard from "./entryCard";

export default function CurrentEntries() {
    const {
        contract
    } = useContract(RAFFLE_CONTRACT_ADDRESS);

    const {
        data: CurrentEntries,
        isLoading: isLoadingCurrentEntries
    } = useContractRead(contract, "getPlayers");

    return (
        <Container py={8}>
            {!isLoadingCurrentEntries && (
                CurrentEntries.map((entry: any, index: number) => (
                    <EntryCard
                        key={index}
                        walletAddress={entry}
                    />
                ))
            )}
        </Container>
    )
}
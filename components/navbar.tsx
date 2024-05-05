import { Container, Flex, Text, Image, Box } from "@chakra-ui/react";
import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Link from "next/link";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";
export default function Navbar() {
    const address = useAddress();

    const {
        contract
    } = useContract(RAFFLE_CONTRACT_ADDRESS);

    const {
        data: owner,
        isLoading: isLoadingOwner
    } = useContractRead(contract, "owner");

    return (
        <Container maxW={"1470px"} pt={8}>
            <Box bg="white" w="100%" p={4} color="black">
                <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Image src={"/images/cryptocurrency.png"} alt="Icon" height="36px" mr={2} />
                        <Link href={"/"}>
                            <Text fontSize={"xl"} fontWeight={"bold"}>LuckyLoom</Text>
                        </Link>
                    </Flex>
                    <Flex flexDirection={"row"} alignItems={"center"}>
                        {!isLoadingOwner && owner === address && (
                            <Link href={"/admin"}>
                                <Text fontWeight={"bold"} mr={10}>Admin</Text>
                            </Link>
                        )}
                        <ConnectWallet />
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )
}
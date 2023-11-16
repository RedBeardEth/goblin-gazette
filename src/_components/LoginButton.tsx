import React from "react";
import { useUIContext } from "../providers/UIProvider";
import  StarknetLogo  from "../icons/starknet.svg?react";
import { shortenHex } from "../utils/utils";
import { useAccount as useL2Account } from "@starknet-react/core";

import { Button } from "./ui/button";
import { disconnect } from "starknetkit";

export const LoginButton = ({
  openAccount = false,
}: {
  openAccount?: boolean;
}) => {
  const { address, isConnected } = useL2Account();
  const { isAccountOpen, toggleAccount, toggleStarknetLogin } = useUIContext();

  const onConnectClick = () => {
    return !isConnected
      ? toggleStarknetLogin()
      : disconnect();
  };

  return (
    <Button
      className="px-3 text-white"
      variant="outline"
      size="lg"
      onClick={onConnectClick}
    >
      <span className="flex items-center font-sans normal-case">
        <StarknetLogo className="mx-2 h-6 w-6" />

        {address && isConnected ? (
          <>{shortenHex(address, 8)}</>
        ) : (
          <span className="hidden sm:block">Connect Starknet</span>
        )}
      </span>
    </Button>
  );
};

import {
    goerli,
    mainnet
  } from "@starknet-react/chains";
  import {
    StarknetConfig,
    publicProvider,
  } from "@starknet-react/core";
import { ReactNode } from "react";
  import { ArgentMobileConnector } from "starknetkit/argentMobile";
  import { InjectedConnector } from "starknetkit/injected";
  import { WebWalletConnector } from "starknetkit/webwallet";

  interface IAppProvider {
    children: ReactNode
}
const connectors = [
    new InjectedConnector({ options: { id: "braavos"} }),
    new InjectedConnector({ options: { id: "argentX" } }),
    new WebWalletConnector({
      url: "https://web.argent.xyz",
    }),
    new ArgentMobileConnector(),
  ];

const AppProvider = ({ children }: IAppProvider) => {    const chains = [goerli, mainnet];
    const provider = publicProvider();
  
    return (
      <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
        {children}
      </StarknetConfig>
    )
  }

  export default AppProvider
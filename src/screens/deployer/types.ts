import { JettonDeployState } from "lib/deploy-controller";

export interface DeployProgressState {
  state: JettonDeployState;
  contractAddress?: null | string;
  jWalletAddress?: null | string;
  jWalletBalance?: null | string;
}

export interface FormState {
  name: string;
  symbol: string;
  initialSupply: string;
  mintAmount: string;
  maxSupply: string;
  decimals: string;
  mintToOwner: string;
  gasFee: string;
}

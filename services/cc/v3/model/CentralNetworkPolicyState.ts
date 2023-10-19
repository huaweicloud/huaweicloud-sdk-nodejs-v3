import { CentralNetworkPolicyStateEnum } from './CentralNetworkPolicyStateEnum';


export class CentralNetworkPolicyState {
    public state?: CentralNetworkPolicyStateEnum;
    public constructor(state?: CentralNetworkPolicyStateEnum) { 
        this['state'] = state;
    }
    public withState(state: CentralNetworkPolicyStateEnum): CentralNetworkPolicyState {
        this['state'] = state;
        return this;
    }
}
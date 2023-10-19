import { CentralNetworkStateEnum } from './CentralNetworkStateEnum';


export class CentralNetworkState {
    public state?: CentralNetworkStateEnum;
    public constructor(state?: CentralNetworkStateEnum) { 
        this['state'] = state;
    }
    public withState(state: CentralNetworkStateEnum): CentralNetworkState {
        this['state'] = state;
        return this;
    }
}
import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';


export class CentralNetworkConnectionState {
    public state?: CentralNetworkConnectionStateEnum;
    public constructor(state?: CentralNetworkConnectionStateEnum) { 
        this['state'] = state;
    }
    public withState(state: CentralNetworkConnectionStateEnum): CentralNetworkConnectionState {
        this['state'] = state;
        return this;
    }
}
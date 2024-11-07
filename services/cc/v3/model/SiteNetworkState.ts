import { SiteNetworkStateEnum } from './SiteNetworkStateEnum';


export class SiteNetworkState {
    public state?: SiteNetworkStateEnum;
    public constructor(state?: SiteNetworkStateEnum) { 
        this['state'] = state;
    }
    public withState(state: SiteNetworkStateEnum): SiteNetworkState {
        this['state'] = state;
        return this;
    }
}
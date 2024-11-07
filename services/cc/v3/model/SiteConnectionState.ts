import { SiteConnectionStateEnum } from './SiteConnectionStateEnum';


export class SiteConnectionState {
    public state?: SiteConnectionStateEnum;
    public constructor(state?: SiteConnectionStateEnum) { 
        this['state'] = state;
    }
    public withState(state: SiteConnectionStateEnum): SiteConnectionState {
        this['state'] = state;
        return this;
    }
}
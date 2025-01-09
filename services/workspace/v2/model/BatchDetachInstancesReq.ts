import { DetachInstancesDesktopInfo } from './DetachInstancesDesktopInfo';


export class BatchDetachInstancesReq {
    public desktops?: Array<DetachInstancesDesktopInfo>;
    public constructor() { 
    }
    public withDesktops(desktops: Array<DetachInstancesDesktopInfo>): BatchDetachInstancesReq {
        this['desktops'] = desktops;
        return this;
    }
}
import { DetachSharedbwDict } from './DetachSharedbwDict';


export class DetachSharedbwReqPublicip {
    public bandwidth?: DetachSharedbwDict;
    public constructor() { 
    }
    public withBandwidth(bandwidth: DetachSharedbwDict): DetachSharedbwReqPublicip {
        this['bandwidth'] = bandwidth;
        return this;
    }
}
import { DetachSharedbwReqPublicip } from './DetachSharedbwReqPublicip';


export class DetachSharedbwReq {
    public publicip?: DetachSharedbwReqPublicip;
    public constructor(publicip?: DetachSharedbwReqPublicip) { 
        this['publicip'] = publicip;
    }
    public withPublicip(publicip: DetachSharedbwReqPublicip): DetachSharedbwReq {
        this['publicip'] = publicip;
        return this;
    }
}
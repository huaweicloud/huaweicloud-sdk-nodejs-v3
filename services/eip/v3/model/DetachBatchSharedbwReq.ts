import { DetachBatchSharedbwReqPublicips } from './DetachBatchSharedbwReqPublicips';


export class DetachBatchSharedbwReq {
    public publicips?: Array<DetachBatchSharedbwReqPublicips>;
    public constructor() { 
    }
    public withPublicips(publicips: Array<DetachBatchSharedbwReqPublicips>): DetachBatchSharedbwReq {
        this['publicips'] = publicips;
        return this;
    }
}
import { BwChangeToPeriodReq } from './BwChangeToPeriodReq';


export class ChangeBandwidthToPeriodRequest {
    public body?: BwChangeToPeriodReq;
    public constructor() { 
    }
    public withBody(body: BwChangeToPeriodReq): ChangeBandwidthToPeriodRequest {
        this['body'] = body;
        return this;
    }
}
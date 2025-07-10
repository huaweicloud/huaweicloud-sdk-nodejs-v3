import { ApplySubnetBandwidthReq } from './ApplySubnetBandwidthReq';


export class ApplySubnetBandwidthRequest {
    public body?: ApplySubnetBandwidthReq;
    public constructor() { 
    }
    public withBody(body: ApplySubnetBandwidthReq): ApplySubnetBandwidthRequest {
        this['body'] = body;
        return this;
    }
}
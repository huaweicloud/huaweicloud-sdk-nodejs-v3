import { TmsQueryReq } from './TmsQueryReq';


export class ShowInstancesNumByTagsRequest {
    public body?: TmsQueryReq;
    public constructor() { 
    }
    public withBody(body: TmsQueryReq): ShowInstancesNumByTagsRequest {
        this['body'] = body;
        return this;
    }
}
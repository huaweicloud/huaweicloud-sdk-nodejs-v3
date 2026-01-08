import { CheckEdgeSiteResourcesReq } from './CheckEdgeSiteResourcesReq';


export class CheckEdgeSiteResourcesRequest {
    public body?: CheckEdgeSiteResourcesReq;
    public constructor() { 
    }
    public withBody(body: CheckEdgeSiteResourcesReq): CheckEdgeSiteResourcesRequest {
        this['body'] = body;
        return this;
    }
}
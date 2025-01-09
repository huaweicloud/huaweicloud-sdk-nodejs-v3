import { BatchAddDesktopsTagsReq } from './BatchAddDesktopsTagsReq';


export class BatchAddDesktopsTagsRequest {
    public body?: BatchAddDesktopsTagsReq;
    public constructor() { 
    }
    public withBody(body: BatchAddDesktopsTagsReq): BatchAddDesktopsTagsRequest {
        this['body'] = body;
        return this;
    }
}
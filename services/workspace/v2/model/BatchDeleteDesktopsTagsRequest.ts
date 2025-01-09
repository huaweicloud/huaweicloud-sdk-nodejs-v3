import { BatchDeleteDesktopsTagsReq } from './BatchDeleteDesktopsTagsReq';


export class BatchDeleteDesktopsTagsRequest {
    public body?: BatchDeleteDesktopsTagsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteDesktopsTagsReq): BatchDeleteDesktopsTagsRequest {
        this['body'] = body;
        return this;
    }
}
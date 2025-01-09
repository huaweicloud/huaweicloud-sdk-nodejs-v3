import { DeleteSubJobsReq } from './DeleteSubJobsReq';


export class BatchDeleteSubJobsRequest {
    public body?: DeleteSubJobsReq;
    public constructor() { 
    }
    public withBody(body: DeleteSubJobsReq): BatchDeleteSubJobsRequest {
        this['body'] = body;
        return this;
    }
}
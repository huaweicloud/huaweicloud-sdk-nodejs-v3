import { DeleteAppGroupReq } from './DeleteAppGroupReq';


export class BatchDeleteAppGroupRequest {
    public body?: DeleteAppGroupReq;
    public constructor() { 
    }
    public withBody(body: DeleteAppGroupReq): BatchDeleteAppGroupRequest {
        this['body'] = body;
        return this;
    }
}
import { SetJobBatchNameReq } from './SetJobBatchNameReq';


export class SetJobBatchNameRequest {
    public body?: SetJobBatchNameReq;
    public constructor() { 
    }
    public withBody(body: SetJobBatchNameReq): SetJobBatchNameRequest {
        this['body'] = body;
        return this;
    }
}
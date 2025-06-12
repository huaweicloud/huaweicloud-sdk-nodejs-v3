import { UpdateRecycleBinPolicyReq } from './UpdateRecycleBinPolicyReq';


export class UpdateRecycleBinPolicyRequest {
    public body?: UpdateRecycleBinPolicyReq;
    public constructor() { 
    }
    public withBody(body: UpdateRecycleBinPolicyReq): UpdateRecycleBinPolicyRequest {
        this['body'] = body;
        return this;
    }
}
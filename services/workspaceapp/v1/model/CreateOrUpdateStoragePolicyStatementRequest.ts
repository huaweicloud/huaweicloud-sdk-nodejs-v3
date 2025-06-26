import { CreateOrUpdateStoragePolicyStatementReq } from './CreateOrUpdateStoragePolicyStatementReq';


export class CreateOrUpdateStoragePolicyStatementRequest {
    public body?: CreateOrUpdateStoragePolicyStatementReq;
    public constructor() { 
    }
    public withBody(body: CreateOrUpdateStoragePolicyStatementReq): CreateOrUpdateStoragePolicyStatementRequest {
        this['body'] = body;
        return this;
    }
}
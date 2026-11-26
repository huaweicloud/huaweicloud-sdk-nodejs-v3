import { CreateWorkloadIdentityReqBody } from './CreateWorkloadIdentityReqBody';


export class CreateWorkloadIdentityRequest {
    public body?: CreateWorkloadIdentityReqBody;
    public constructor() { 
    }
    public withBody(body: CreateWorkloadIdentityReqBody): CreateWorkloadIdentityRequest {
        this['body'] = body;
        return this;
    }
}
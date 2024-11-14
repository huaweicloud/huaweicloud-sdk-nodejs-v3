import { SetAutoEnlargePoliciesRequestBody } from './SetAutoEnlargePoliciesRequestBody';


export class SetAutoEnlargePoliciesRequest {
    public body?: SetAutoEnlargePoliciesRequestBody;
    public constructor() { 
    }
    public withBody(body: SetAutoEnlargePoliciesRequestBody): SetAutoEnlargePoliciesRequest {
        this['body'] = body;
        return this;
    }
}
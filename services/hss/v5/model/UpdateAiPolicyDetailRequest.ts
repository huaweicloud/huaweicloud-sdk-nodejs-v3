import { UpdateAiPolicyDetailRequestInfo } from './UpdateAiPolicyDetailRequestInfo';


export class UpdateAiPolicyDetailRequest {
    public body?: UpdateAiPolicyDetailRequestInfo;
    public constructor() { 
    }
    public withBody(body: UpdateAiPolicyDetailRequestInfo): UpdateAiPolicyDetailRequest {
        this['body'] = body;
        return this;
    }
}
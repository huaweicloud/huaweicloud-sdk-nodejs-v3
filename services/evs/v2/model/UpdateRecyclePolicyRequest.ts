import { ModifyRecycleBinPolicyRequestBody } from './ModifyRecycleBinPolicyRequestBody';


export class UpdateRecyclePolicyRequest {
    public body?: ModifyRecycleBinPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: ModifyRecycleBinPolicyRequestBody): UpdateRecyclePolicyRequest {
        this['body'] = body;
        return this;
    }
}
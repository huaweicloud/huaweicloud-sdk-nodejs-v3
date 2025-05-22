import { UpdateRecycleBinPolicyRequestBody } from './UpdateRecycleBinPolicyRequestBody';


export class UpdateRecycleBinPolicyRequest {
    public body?: UpdateRecycleBinPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateRecycleBinPolicyRequestBody): UpdateRecycleBinPolicyRequest {
        this['body'] = body;
        return this;
    }
}
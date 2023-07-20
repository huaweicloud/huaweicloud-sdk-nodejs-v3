import { RecyclePolicyRequestBody } from './RecyclePolicyRequestBody';


export class SetRecyclePolicyRequest {
    public body?: RecyclePolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: RecyclePolicyRequestBody): SetRecyclePolicyRequest {
        this['body'] = body;
        return this;
    }
}
import { SetAutoPolicyRequestBody } from './SetAutoPolicyRequestBody';


export class SetAutoEnlargePolicyRequest {
    public body?: SetAutoPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: SetAutoPolicyRequestBody): SetAutoEnlargePolicyRequest {
        this['body'] = body;
        return this;
    }
}
import { SubscribeAiAssistantReq } from './SubscribeAiAssistantReq';


export class SubscribeAiAssistantRequest {
    public body?: SubscribeAiAssistantReq;
    public constructor() { 
    }
    public withBody(body: SubscribeAiAssistantReq): SubscribeAiAssistantRequest {
        this['body'] = body;
        return this;
    }
}
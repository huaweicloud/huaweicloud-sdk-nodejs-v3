import { AiAppCreateRequest } from './AiAppCreateRequest';


export class CreateAiAppRequest {
    public body?: AiAppCreateRequest;
    public constructor() { 
    }
    public withBody(body: AiAppCreateRequest): CreateAiAppRequest {
        this['body'] = body;
        return this;
    }
}
import { AssistAuthMethodConfigRequest } from './AssistAuthMethodConfigRequest';


export class UpdateAssistAuthMethodConfigRequest {
    public body?: AssistAuthMethodConfigRequest;
    public constructor() { 
    }
    public withBody(body: AssistAuthMethodConfigRequest): UpdateAssistAuthMethodConfigRequest {
        this['body'] = body;
        return this;
    }
}
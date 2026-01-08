import { AssistAuthApplyObjectsRequest } from './AssistAuthApplyObjectsRequest';


export class UpdateAssistAuthConfigApplyObjectsRequest {
    public body?: AssistAuthApplyObjectsRequest;
    public constructor() { 
    }
    public withBody(body: AssistAuthApplyObjectsRequest): UpdateAssistAuthConfigApplyObjectsRequest {
        this['body'] = body;
        return this;
    }
}
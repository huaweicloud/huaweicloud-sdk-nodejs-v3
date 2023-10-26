import { DefaultTopicRequest } from './DefaultTopicRequest';


export class UpdateDefaultTopicRequest {
    public body?: DefaultTopicRequest;
    public constructor() { 
    }
    public withBody(body: DefaultTopicRequest): UpdateDefaultTopicRequest {
        this['body'] = body;
        return this;
    }
}
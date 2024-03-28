import { CreateEnhancedConnectionRequestBody } from './CreateEnhancedConnectionRequestBody';


export class CreateEnhancedConnectionRequest {
    public body?: CreateEnhancedConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateEnhancedConnectionRequestBody): CreateEnhancedConnectionRequest {
        this['body'] = body;
        return this;
    }
}
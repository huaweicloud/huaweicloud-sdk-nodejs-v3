import { CreateDbCacheMappingRequestBody } from './CreateDbCacheMappingRequestBody';


export class CreateDbCacheMappingRequest {
    public body?: CreateDbCacheMappingRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDbCacheMappingRequestBody): CreateDbCacheMappingRequest {
        this['body'] = body;
        return this;
    }
}
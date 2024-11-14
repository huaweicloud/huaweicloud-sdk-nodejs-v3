import { DeleteDbCacheMappingRequestBody } from './DeleteDbCacheMappingRequestBody';


export class DeleteDbCacheMappingRequest {
    public body?: DeleteDbCacheMappingRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteDbCacheMappingRequestBody): DeleteDbCacheMappingRequest {
        this['body'] = body;
        return this;
    }
}
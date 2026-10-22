import { HyperinstanceGroupCreateRequest } from './HyperinstanceGroupCreateRequest';


export class CreateHyperinstanceGroupRequest {
    public body?: HyperinstanceGroupCreateRequest;
    public constructor() { 
    }
    public withBody(body: HyperinstanceGroupCreateRequest): CreateHyperinstanceGroupRequest {
        this['body'] = body;
        return this;
    }
}
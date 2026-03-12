import { ListDeployedResourcesRequestBody } from './ListDeployedResourcesRequestBody';


export class ListDeployedResourcesRequest {
    public body?: ListDeployedResourcesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListDeployedResourcesRequestBody): ListDeployedResourcesRequest {
        this['body'] = body;
        return this;
    }
}
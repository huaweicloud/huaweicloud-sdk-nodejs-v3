import { ListTagReq } from './ListTagReq';


export class ListTagRequest {
    private 'resource_type': string | undefined;
    public body?: ListTagReq;
    public constructor(resourceType?: any) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withBody(body: ListTagReq): ListTagRequest {
        this['body'] = body;
        return this;
    }
}
import { ListTagReq } from './ListTagReq';


export class ListTagRequest {
    private 'resource_type'?: string;
    public body?: ListTagReq;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ListTagReq): ListTagRequest {
        this['body'] = body;
        return this;
    }
}
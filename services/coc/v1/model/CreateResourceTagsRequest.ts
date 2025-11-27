import { ResourceTagOperateRequest } from './ResourceTagOperateRequest';


export class CreateResourceTagsRequest {
    private 'resource_id'?: string;
    public body?: ResourceTagOperateRequest;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): CreateResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: ResourceTagOperateRequest): CreateResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}
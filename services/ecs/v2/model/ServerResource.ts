import { ResourceTag } from './ResourceTag';


export class ServerResource {
    private 'resource_id'?: string;
    private 'resource_detail'?: string;
    public tags?: Array<ResourceTag>;
    private 'resource_name'?: string;
    public constructor(resourceId?: string, resourceDetail?: string, tags?: Array<ResourceTag>, resourceName?: string) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
        this['tags'] = tags;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): ServerResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: string): ServerResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): string | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<ResourceTag>): ServerResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): ServerResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}
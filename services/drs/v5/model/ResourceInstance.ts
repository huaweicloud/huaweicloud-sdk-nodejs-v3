import { ResourceTagInfo } from './ResourceTagInfo';


export class ResourceInstance {
    private 'resource_id'?: string;
    private 'resource_detail'?: string;
    private 'resource_name'?: string;
    public tags?: Array<ResourceTagInfo>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceInstance {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: string): ResourceInstance {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): string | undefined {
        return this['resource_detail'];
    }
    public withResourceName(resourceName: string): ResourceInstance {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceTagInfo>): ResourceInstance {
        this['tags'] = tags;
        return this;
    }
}
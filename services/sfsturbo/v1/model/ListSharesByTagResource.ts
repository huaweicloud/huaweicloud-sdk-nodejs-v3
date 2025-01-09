import { ResourceTag } from './ResourceTag';


export class ListSharesByTagResource {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_detail'?: string;
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ListSharesByTagResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListSharesByTagResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceDetail(resourceDetail: string): ListSharesByTagResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): string | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<ResourceTag>): ListSharesByTagResource {
        this['tags'] = tags;
        return this;
    }
}
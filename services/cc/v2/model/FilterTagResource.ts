import { Tag } from './Tag';


export class FilterTagResource {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_detail'?: string;
    public tags?: Array<Tag>;
    public constructor(resourceName?: string) { 
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): FilterTagResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): FilterTagResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceDetail(resourceDetail: string): FilterTagResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): string | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<Tag>): FilterTagResource {
        this['tags'] = tags;
        return this;
    }
}
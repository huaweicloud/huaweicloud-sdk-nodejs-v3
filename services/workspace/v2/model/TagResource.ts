import { Tag } from './Tag';


export class TagResource {
    private 'resource_detail'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withResourceDetail(resourceDetail: string): TagResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: string  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): string | undefined {
        return this['resource_detail'];
    }
    public withResourceId(resourceId: string): TagResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): TagResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<Tag>): TagResource {
        this['tags'] = tags;
        return this;
    }
}
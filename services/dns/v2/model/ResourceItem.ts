import { Tag } from './Tag';


export class ResourceItem {
    private 'resource_id'?: string;
    private 'resource_detail'?: object;
    public tags?: Array<Tag>;
    private 'resource_name'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceDetail(resourceDetail: object): ResourceItem {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<Tag>): ResourceItem {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): ResourceItem {
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
import { Tag } from './Tag';


export class ResourceDTO {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<Tag>;
    private 'resource_detail'?: object;
    public constructor(resourceId?: string, resourceName?: string, tags?: Array<Tag>, resourceDetail?: object) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['tags'] = tags;
        this['resource_detail'] = resourceDetail;
    }
    public withResourceId(resourceId: string): ResourceDTO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceDTO {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<Tag>): ResourceDTO {
        this['tags'] = tags;
        return this;
    }
    public withResourceDetail(resourceDetail: object): ResourceDTO {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
}
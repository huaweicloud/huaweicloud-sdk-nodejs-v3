import { Tag } from './Tag';


export class TmsResource {
    private 'resource_id'?: string;
    public tags?: Array<Tag>;
    private 'resource_name'?: string;
    public constructor(resourceId?: string, tags?: Array<Tag>, resourceName?: string) { 
        this['resource_id'] = resourceId;
        this['tags'] = tags;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): TmsResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTags(tags: Array<Tag>): TmsResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): TmsResource {
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
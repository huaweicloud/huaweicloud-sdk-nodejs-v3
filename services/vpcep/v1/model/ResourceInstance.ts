import { TagList } from './TagList';


export class ResourceInstance {
    private 'resource_id'?: string | undefined;
    public tags?: Array<TagList>;
    private 'resource_name'?: string | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceInstance {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTags(tags: Array<TagList>): ResourceInstance {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): ResourceInstance {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
}
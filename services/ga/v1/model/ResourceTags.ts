import { ResourceTag } from './ResourceTag';


export class ResourceTags {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceTags {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceTags {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceTag>): ResourceTags {
        this['tags'] = tags;
        return this;
    }
}
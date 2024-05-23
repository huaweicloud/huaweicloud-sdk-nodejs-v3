import { Match } from './Match';


export class ResourceDTO {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<Match>;
    public constructor(resourceId?: string, tags?: Array<Match>) { 
        this['resource_id'] = resourceId;
        this['tags'] = tags;
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
    public withTags(tags: Array<Match>): ResourceDTO {
        this['tags'] = tags;
        return this;
    }
}
import { Tag } from './Tag';


export class ResqTagResource {
    private 'project_id'?: string;
    private 'resource_types'?: Array<string>;
    public tags?: Array<Tag>;
    public offset?: number;
    public limit?: number;
    public constructor(resourceTypes?: Array<string>, tags?: Array<Tag>) { 
        this['resource_types'] = resourceTypes;
        this['tags'] = tags;
    }
    public withProjectId(projectId: string): ResqTagResource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceTypes(resourceTypes: Array<string>): ResqTagResource {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<string> | undefined {
        return this['resource_types'];
    }
    public withTags(tags: Array<Tag>): ResqTagResource {
        this['tags'] = tags;
        return this;
    }
    public withOffset(offset: number): ResqTagResource {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ResqTagResource {
        this['limit'] = limit;
        return this;
    }
}
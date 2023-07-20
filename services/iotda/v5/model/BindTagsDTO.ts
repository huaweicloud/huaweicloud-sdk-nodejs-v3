import { TagV5DTO } from './TagV5DTO';


export class BindTagsDTO {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    public tags?: Array<TagV5DTO>;
    public constructor(resourceType?: string, resourceId?: string, tags?: Array<TagV5DTO>) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['tags'] = tags;
    }
    public withResourceType(resourceType: string): BindTagsDTO {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BindTagsDTO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTags(tags: Array<TagV5DTO>): BindTagsDTO {
        this['tags'] = tags;
        return this;
    }
}
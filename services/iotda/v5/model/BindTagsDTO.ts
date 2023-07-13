import { TagV5DTO } from './TagV5DTO';


export class BindTagsDTO {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    public tags: Array<TagV5DTO>;
    public constructor(resourceType?: any, resourceId?: any, tags?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['tags'] = tags;
    }
    public withResourceType(resourceType: string): BindTagsDTO {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): BindTagsDTO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTags(tags: Array<TagV5DTO>): BindTagsDTO {
        this['tags'] = tags;
        return this;
    }
}
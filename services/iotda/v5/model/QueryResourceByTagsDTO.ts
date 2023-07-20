import { TagV5DTO } from './TagV5DTO';


export class QueryResourceByTagsDTO {
    private 'resource_type'?: string;
    public tags?: Array<TagV5DTO>;
    public constructor(resourceType?: string, tags?: Array<TagV5DTO>) { 
        this['resource_type'] = resourceType;
        this['tags'] = tags;
    }
    public withResourceType(resourceType: string): QueryResourceByTagsDTO {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withTags(tags: Array<TagV5DTO>): QueryResourceByTagsDTO {
        this['tags'] = tags;
        return this;
    }
}
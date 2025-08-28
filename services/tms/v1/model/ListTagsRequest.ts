

export class ListTagsRequest {
    private 'resource_types'?: string;
    private 'project_id'?: string;
    private 'tag_types'?: ListTagsRequestTagTypesEnum | string;
    public constructor(resourceTypes?: string, projectId?: string, tagTypes?: string) { 
        this['resource_types'] = resourceTypes;
        this['project_id'] = projectId;
        this['tag_types'] = tagTypes;
    }
    public withResourceTypes(resourceTypes: string): ListTagsRequest {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: string  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): string | undefined {
        return this['resource_types'];
    }
    public withProjectId(projectId: string): ListTagsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTagTypes(tagTypes: ListTagsRequestTagTypesEnum | string): ListTagsRequest {
        this['tag_types'] = tagTypes;
        return this;
    }
    public set tagTypes(tagTypes: ListTagsRequestTagTypesEnum | string  | undefined) {
        this['tag_types'] = tagTypes;
    }
    public get tagTypes(): ListTagsRequestTagTypesEnum | string | undefined {
        return this['tag_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestTagTypesEnum {
    RESOURCE = 'resource'
}

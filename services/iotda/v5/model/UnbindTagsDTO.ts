

export class UnbindTagsDTO {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    private 'tag_keys': Array<string> | undefined;
    public constructor(resourceType?: any, resourceId?: any, tagKeys?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['tag_keys'] = tagKeys;
    }
    public withResourceType(resourceType: string): UnbindTagsDTO {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): UnbindTagsDTO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTagKeys(tagKeys: Array<string>): UnbindTagsDTO {
        this['tag_keys'] = tagKeys;
        return this;
    }
    public set tagKeys(tagKeys: Array<string> | undefined) {
        this['tag_keys'] = tagKeys;
    }
    public get tagKeys() {
        return this['tag_keys'];
    }
}
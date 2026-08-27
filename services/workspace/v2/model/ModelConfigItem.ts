

export class ModelConfigItem {
    private 'group_id'?: string;
    private 'resource_id'?: string;
    private 'resource_type'?: ModelConfigItemResourceTypeEnum | string;
    public constructor(groupId?: string, resourceId?: string, resourceType?: string) { 
        this['group_id'] = groupId;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withGroupId(groupId: string): ModelConfigItem {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: string): ModelConfigItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: ModelConfigItemResourceTypeEnum | string): ModelConfigItem {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ModelConfigItemResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ModelConfigItemResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModelConfigItemResourceTypeEnum {
    DESKTOP = 'DESKTOP',
    DESKTOP_TAG = 'DESKTOP_TAG'
}

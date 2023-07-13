

export class AddDeviceGroupDTO {
    public name?: string;
    public description?: string;
    private 'super_group_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'group_type'?: string | undefined;
    private 'dynamic_group_rule'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): AddDeviceGroupDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddDeviceGroupDTO {
        this['description'] = description;
        return this;
    }
    public withSuperGroupId(superGroupId: string): AddDeviceGroupDTO {
        this['super_group_id'] = superGroupId;
        return this;
    }
    public set superGroupId(superGroupId: string | undefined) {
        this['super_group_id'] = superGroupId;
    }
    public get superGroupId() {
        return this['super_group_id'];
    }
    public withAppId(appId: string): AddDeviceGroupDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withGroupType(groupType: string): AddDeviceGroupDTO {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType() {
        return this['group_type'];
    }
    public withDynamicGroupRule(dynamicGroupRule: string): AddDeviceGroupDTO {
        this['dynamic_group_rule'] = dynamicGroupRule;
        return this;
    }
    public set dynamicGroupRule(dynamicGroupRule: string | undefined) {
        this['dynamic_group_rule'] = dynamicGroupRule;
    }
    public get dynamicGroupRule() {
        return this['dynamic_group_rule'];
    }
}
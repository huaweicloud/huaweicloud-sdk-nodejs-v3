

export class DeviceGroupResponseSummary {
    private 'group_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'super_group_id'?: string | undefined;
    public constructor() { 
    }
    public withGroupId(groupId: string): DeviceGroupResponseSummary {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): DeviceGroupResponseSummary {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeviceGroupResponseSummary {
        this['description'] = description;
        return this;
    }
    public withSuperGroupId(superGroupId: string): DeviceGroupResponseSummary {
        this['super_group_id'] = superGroupId;
        return this;
    }
    public set superGroupId(superGroupId: string | undefined) {
        this['super_group_id'] = superGroupId;
    }
    public get superGroupId() {
        return this['super_group_id'];
    }
}


export class AddDeviceGroupDTO {
    public name?: string;
    public description?: string;
    private 'super_group_id'?: string | undefined;
    private 'app_id'?: string | undefined;
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
}
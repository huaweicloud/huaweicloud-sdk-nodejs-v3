

export class AddHarmonySoftBusDTO {
    private 'bus_name'?: string;
    private 'group_id'?: string;
    private 'app_id'?: string;
    public constructor() { 
    }
    public withBusName(busName: string): AddHarmonySoftBusDTO {
        this['bus_name'] = busName;
        return this;
    }
    public set busName(busName: string  | undefined) {
        this['bus_name'] = busName;
    }
    public get busName(): string | undefined {
        return this['bus_name'];
    }
    public withGroupId(groupId: string): AddHarmonySoftBusDTO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAppId(appId: string): AddHarmonySoftBusDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}
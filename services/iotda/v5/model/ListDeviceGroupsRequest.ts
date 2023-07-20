

export class ListDeviceGroupsRequest {
    private 'Instance-Id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    private 'last_modified_time'?: string;
    private 'app_id'?: string;
    private 'group_type'?: string;
    public name?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDeviceGroupsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListDeviceGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDeviceGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDeviceGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLastModifiedTime(lastModifiedTime: string): ListDeviceGroupsRequest {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: string  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): string | undefined {
        return this['last_modified_time'];
    }
    public withAppId(appId: string): ListDeviceGroupsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withGroupType(groupType: string): ListDeviceGroupsRequest {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withName(name: string): ListDeviceGroupsRequest {
        this['name'] = name;
        return this;
    }
}


export class ShowDevicesInGroupRequest {
    private 'Instance-Id'?: string | undefined;
    private 'group_id': string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): ShowDevicesInGroupRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withGroupId(groupId: string): ShowDevicesInGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withLimit(limit: number): ShowDevicesInGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowDevicesInGroupRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ShowDevicesInGroupRequest {
        this['offset'] = offset;
        return this;
    }
}
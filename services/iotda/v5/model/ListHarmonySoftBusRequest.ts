

export class ListHarmonySoftBusRequest {
    private 'Instance-Id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    private 'group_id'?: string;
    private 'app_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListHarmonySoftBusRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListHarmonySoftBusRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListHarmonySoftBusRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListHarmonySoftBusRequest {
        this['offset'] = offset;
        return this;
    }
    public withGroupId(groupId: string): ListHarmonySoftBusRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAppId(appId: string): ListHarmonySoftBusRequest {
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
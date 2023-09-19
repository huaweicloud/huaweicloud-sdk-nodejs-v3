

export class ListCloudConnectionRoutesRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    private 'cloud_connection_id'?: Array<string>;
    private 'instance_id'?: Array<string>;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCloudConnectionRoutesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCloudConnectionRoutesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListCloudConnectionRoutesRequest {
        this['id'] = id;
        return this;
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListCloudConnectionRoutesRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
    public withInstanceId(instanceId: Array<string>): ListCloudConnectionRoutesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withRegionId(regionId: string): ListCloudConnectionRoutesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}


export class ListNetworkInstancesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'cloud_connection_id'?: Array<string>;
    public status?: Array<ListNetworkInstancesRequestStatusEnum> | Array<string>;
    public type?: Array<string>;
    private 'instance_id'?: Array<string>;
    private 'region_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListNetworkInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListNetworkInstancesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListNetworkInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListNetworkInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListNetworkInstancesRequest {
        this['description'] = description;
        return this;
    }
    public withCloudConnectionId(cloudConnectionId: Array<string>): ListNetworkInstancesRequest {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: Array<string>  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): Array<string> | undefined {
        return this['cloud_connection_id'];
    }
    public withStatus(status: Array<ListNetworkInstancesRequestStatusEnum> | Array<string>): ListNetworkInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: Array<string>): ListNetworkInstancesRequest {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: Array<string>): ListNetworkInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withRegionId(regionId: Array<string>): ListNetworkInstancesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string>  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): Array<string> | undefined {
        return this['region_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNetworkInstancesRequestStatusEnum {
    ACTIVE = 'ACTIVE'
}

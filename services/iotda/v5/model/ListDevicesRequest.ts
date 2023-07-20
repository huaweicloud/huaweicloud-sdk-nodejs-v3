

export class ListDevicesRequest {
    private 'Instance-Id'?: string;
    private 'product_id'?: string;
    private 'gateway_id'?: string;
    private 'is_cascade_query'?: boolean;
    private 'node_id'?: string;
    private 'device_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'app_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDevicesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProductId(productId: string): ListDevicesRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withGatewayId(gatewayId: string): ListDevicesRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withIsCascadeQuery(isCascadeQuery: boolean): ListDevicesRequest {
        this['is_cascade_query'] = isCascadeQuery;
        return this;
    }
    public set isCascadeQuery(isCascadeQuery: boolean  | undefined) {
        this['is_cascade_query'] = isCascadeQuery;
    }
    public get isCascadeQuery(): boolean | undefined {
        return this['is_cascade_query'];
    }
    public withNodeId(nodeId: string): ListDevicesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withDeviceName(deviceName: string): ListDevicesRequest {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withLimit(limit: number): ListDevicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDevicesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDevicesRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: string): ListDevicesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDevicesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withAppId(appId: string): ListDevicesRequest {
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
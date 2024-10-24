

export class ListTenantResourcesRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public limit?: number;
    public offset?: number;
    public resource?: string;
    public business?: string;
    private 'resource_source'?: string;
    private 'resource_name'?: string;
    private 'resource_id'?: string;
    private 'order_id'?: string;
    private 'charging_mode'?: string;
    private 'resource_expire_start_time'?: string;
    private 'resource_expire_end_time'?: string;
    private 'sub_resource'?: string;
    public constructor(resourceSource?: string) { 
        this['resource_source'] = resourceSource;
    }
    public withAuthorization(authorization: string): ListTenantResourcesRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTenantResourcesRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListTenantResourcesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withLimit(limit: number): ListTenantResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTenantResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withResource(resource: string): ListTenantResourcesRequest {
        this['resource'] = resource;
        return this;
    }
    public withBusiness(business: string): ListTenantResourcesRequest {
        this['business'] = business;
        return this;
    }
    public withResourceSource(resourceSource: string): ListTenantResourcesRequest {
        this['resource_source'] = resourceSource;
        return this;
    }
    public set resourceSource(resourceSource: string  | undefined) {
        this['resource_source'] = resourceSource;
    }
    public get resourceSource(): string | undefined {
        return this['resource_source'];
    }
    public withResourceName(resourceName: string): ListTenantResourcesRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceId(resourceId: string): ListTenantResourcesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withOrderId(orderId: string): ListTenantResourcesRequest {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withChargingMode(chargingMode: string): ListTenantResourcesRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceExpireStartTime(resourceExpireStartTime: string): ListTenantResourcesRequest {
        this['resource_expire_start_time'] = resourceExpireStartTime;
        return this;
    }
    public set resourceExpireStartTime(resourceExpireStartTime: string  | undefined) {
        this['resource_expire_start_time'] = resourceExpireStartTime;
    }
    public get resourceExpireStartTime(): string | undefined {
        return this['resource_expire_start_time'];
    }
    public withResourceExpireEndTime(resourceExpireEndTime: string): ListTenantResourcesRequest {
        this['resource_expire_end_time'] = resourceExpireEndTime;
        return this;
    }
    public set resourceExpireEndTime(resourceExpireEndTime: string  | undefined) {
        this['resource_expire_end_time'] = resourceExpireEndTime;
    }
    public get resourceExpireEndTime(): string | undefined {
        return this['resource_expire_end_time'];
    }
    public withSubResource(subResource: string): ListTenantResourcesRequest {
        this['sub_resource'] = subResource;
        return this;
    }
    public set subResource(subResource: string  | undefined) {
        this['sub_resource'] = subResource;
    }
    public get subResource(): string | undefined {
        return this['sub_resource'];
    }
}
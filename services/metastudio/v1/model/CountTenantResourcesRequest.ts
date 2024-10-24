

export class CountTenantResourcesRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public business?: string;
    private 'resource_expire_start_time'?: string;
    private 'resource_expire_end_time'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CountTenantResourcesRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CountTenantResourcesRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): CountTenantResourcesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withBusiness(business: string): CountTenantResourcesRequest {
        this['business'] = business;
        return this;
    }
    public withResourceExpireStartTime(resourceExpireStartTime: string): CountTenantResourcesRequest {
        this['resource_expire_start_time'] = resourceExpireStartTime;
        return this;
    }
    public set resourceExpireStartTime(resourceExpireStartTime: string  | undefined) {
        this['resource_expire_start_time'] = resourceExpireStartTime;
    }
    public get resourceExpireStartTime(): string | undefined {
        return this['resource_expire_start_time'];
    }
    public withResourceExpireEndTime(resourceExpireEndTime: string): CountTenantResourcesRequest {
        this['resource_expire_end_time'] = resourceExpireEndTime;
        return this;
    }
    public set resourceExpireEndTime(resourceExpireEndTime: string  | undefined) {
        this['resource_expire_end_time'] = resourceExpireEndTime;
    }
    public get resourceExpireEndTime(): string | undefined {
        return this['resource_expire_end_time'];
    }
}
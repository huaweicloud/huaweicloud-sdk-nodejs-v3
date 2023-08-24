

export class ListQuotasDetailRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public version?: string;
    public category?: string;
    private 'quota_status'?: string;
    private 'used_status'?: string;
    private 'host_name'?: string;
    private 'resource_id'?: string;
    private 'charging_mode'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withRegion(region: string): ListQuotasDetailRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListQuotasDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVersion(version: string): ListQuotasDetailRequest {
        this['version'] = version;
        return this;
    }
    public withCategory(category: string): ListQuotasDetailRequest {
        this['category'] = category;
        return this;
    }
    public withQuotaStatus(quotaStatus: string): ListQuotasDetailRequest {
        this['quota_status'] = quotaStatus;
        return this;
    }
    public set quotaStatus(quotaStatus: string  | undefined) {
        this['quota_status'] = quotaStatus;
    }
    public get quotaStatus(): string | undefined {
        return this['quota_status'];
    }
    public withUsedStatus(usedStatus: string): ListQuotasDetailRequest {
        this['used_status'] = usedStatus;
        return this;
    }
    public set usedStatus(usedStatus: string  | undefined) {
        this['used_status'] = usedStatus;
    }
    public get usedStatus(): string | undefined {
        return this['used_status'];
    }
    public withHostName(hostName: string): ListQuotasDetailRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withResourceId(resourceId: string): ListQuotasDetailRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withChargingMode(chargingMode: string): ListQuotasDetailRequest {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withLimit(limit: number): ListQuotasDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListQuotasDetailRequest {
        this['offset'] = offset;
        return this;
    }
}
import { TagInfo } from './TagInfo';


export class QuotaResourcesResponseInfo {
    private 'resource_id'?: string;
    public version?: string;
    private 'quota_status'?: string;
    private 'used_status'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'charging_mode'?: string;
    public tags?: Array<TagInfo>;
    private 'expire_time'?: number;
    private 'shared_quota'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): QuotaResourcesResponseInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withVersion(version: string): QuotaResourcesResponseInfo {
        this['version'] = version;
        return this;
    }
    public withQuotaStatus(quotaStatus: string): QuotaResourcesResponseInfo {
        this['quota_status'] = quotaStatus;
        return this;
    }
    public set quotaStatus(quotaStatus: string  | undefined) {
        this['quota_status'] = quotaStatus;
    }
    public get quotaStatus(): string | undefined {
        return this['quota_status'];
    }
    public withUsedStatus(usedStatus: string): QuotaResourcesResponseInfo {
        this['used_status'] = usedStatus;
        return this;
    }
    public set usedStatus(usedStatus: string  | undefined) {
        this['used_status'] = usedStatus;
    }
    public get usedStatus(): string | undefined {
        return this['used_status'];
    }
    public withHostId(hostId: string): QuotaResourcesResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): QuotaResourcesResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withChargingMode(chargingMode: string): QuotaResourcesResponseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withTags(tags: Array<TagInfo>): QuotaResourcesResponseInfo {
        this['tags'] = tags;
        return this;
    }
    public withExpireTime(expireTime: number): QuotaResourcesResponseInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withSharedQuota(sharedQuota: string): QuotaResourcesResponseInfo {
        this['shared_quota'] = sharedQuota;
        return this;
    }
    public set sharedQuota(sharedQuota: string  | undefined) {
        this['shared_quota'] = sharedQuota;
    }
    public get sharedQuota(): string | undefined {
        return this['shared_quota'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QuotaResourcesResponseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): QuotaResourcesResponseInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
}
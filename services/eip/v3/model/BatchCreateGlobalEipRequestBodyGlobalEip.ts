import { BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo } from './BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo';
import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';


export class BatchCreateGlobalEipRequestBodyGlobalEip {
    public name?: string;
    public description?: string;
    private 'geip_pool_name'?: string;
    private 'access_site'?: string;
    private 'internet_bandwidth_info'?: BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo;
    public count?: number;
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    private 'enterprise_project_id'?: string;
    public constructor(geipPoolName?: string, accessSite?: string, internetBandwidthInfo?: BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo) { 
        this['geip_pool_name'] = geipPoolName;
        this['access_site'] = accessSite;
        this['internet_bandwidth_info'] = internetBandwidthInfo;
    }
    public withName(name: string): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['description'] = description;
        return this;
    }
    public withGeipPoolName(geipPoolName: string): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: string  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): string | undefined {
        return this['geip_pool_name'];
    }
    public withAccessSite(accessSite: string): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withInternetBandwidthInfo(internetBandwidthInfo: BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['internet_bandwidth_info'] = internetBandwidthInfo;
        return this;
    }
    public set internetBandwidthInfo(internetBandwidthInfo: BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo  | undefined) {
        this['internet_bandwidth_info'] = internetBandwidthInfo;
    }
    public get internetBandwidthInfo(): BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo | undefined {
        return this['internet_bandwidth_info'];
    }
    public withCount(count: number): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['count'] = count;
        return this;
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateGlobalEipRequestBodyGlobalEip {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}
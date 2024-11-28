import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';


export class CreateGlobalEipRequestBodyGlobalEip {
    public name?: string;
    public description?: string;
    private 'geip_pool_name'?: string;
    private 'access_site'?: string;
    private 'internet_bandwidth_id'?: string;
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    private 'enterprise_project_id'?: string;
    public constructor(geipPoolName?: string, accessSite?: string) { 
        this['geip_pool_name'] = geipPoolName;
        this['access_site'] = accessSite;
    }
    public withName(name: string): CreateGlobalEipRequestBodyGlobalEip {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateGlobalEipRequestBodyGlobalEip {
        this['description'] = description;
        return this;
    }
    public withGeipPoolName(geipPoolName: string): CreateGlobalEipRequestBodyGlobalEip {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: string  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): string | undefined {
        return this['geip_pool_name'];
    }
    public withAccessSite(accessSite: string): CreateGlobalEipRequestBodyGlobalEip {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withInternetBandwidthId(internetBandwidthId: string): CreateGlobalEipRequestBodyGlobalEip {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: string  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): string | undefined {
        return this['internet_bandwidth_id'];
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): CreateGlobalEipRequestBodyGlobalEip {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalEipRequestBodyGlobalEip {
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
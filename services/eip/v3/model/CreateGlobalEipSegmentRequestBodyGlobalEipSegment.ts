import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';
import { CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth } from './CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth';


export class CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
    public name?: string;
    public description?: string;
    private 'geip_pool_name'?: string;
    private 'access_site'?: string;
    public mask?: number;
    private 'internet_bandwidth'?: CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth;
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    private 'enterprise_project_id'?: string;
    public constructor(geipPoolName?: string, accessSite?: string, mask?: number) { 
        this['geip_pool_name'] = geipPoolName;
        this['access_site'] = accessSite;
        this['mask'] = mask;
    }
    public withName(name: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['description'] = description;
        return this;
    }
    public withGeipPoolName(geipPoolName: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['geip_pool_name'] = geipPoolName;
        return this;
    }
    public set geipPoolName(geipPoolName: string  | undefined) {
        this['geip_pool_name'] = geipPoolName;
    }
    public get geipPoolName(): string | undefined {
        return this['geip_pool_name'];
    }
    public withAccessSite(accessSite: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withMask(mask: number): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['mask'] = mask;
        return this;
    }
    public withInternetBandwidth(internetBandwidth: CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['internet_bandwidth'] = internetBandwidth;
        return this;
    }
    public set internetBandwidth(internetBandwidth: CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth  | undefined) {
        this['internet_bandwidth'] = internetBandwidth;
    }
    public get internetBandwidth(): CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth | undefined {
        return this['internet_bandwidth'];
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalEipSegmentRequestBodyGlobalEipSegment {
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
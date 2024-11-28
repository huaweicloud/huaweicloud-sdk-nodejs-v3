import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';


export class BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
    private 'ingress_size'?: number;
    private 'charge_mode'?: string;
    public isp?: string;
    private 'access_site'?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    public count?: number;
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    private 'enterprise_project_id'?: string;
    public type?: string;
    public constructor(isp?: string, accessSite?: string, size?: number) { 
        this['isp'] = isp;
        this['access_site'] = accessSite;
        this['size'] = size;
    }
    public withIngressSize(ingressSize: number): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withChargeMode(chargeMode: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withIsp(isp: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['isp'] = isp;
        return this;
    }
    public withAccessSite(accessSite: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withSize(size: number): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withName(name: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['description'] = description;
        return this;
    }
    public withCount(count: number): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['count'] = count;
        return this;
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): BatchCreateInternetBandwidthRequestBodyInternetBandwidth {
        this['type'] = type;
        return this;
    }
}
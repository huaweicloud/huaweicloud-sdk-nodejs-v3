import { CreateGlobalEipRequestBodyGlobalEipTags } from './CreateGlobalEipRequestBodyGlobalEipTags';


export class CreateInternetBandwidthRequestBodyInternetBandwidth {
    private 'ingress_size'?: number;
    private 'charge_mode'?: string;
    public isp?: string;
    private 'access_site'?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    public tags?: Array<CreateGlobalEipRequestBodyGlobalEipTags>;
    private 'enterprise_project_id'?: string;
    public type?: string;
    public constructor(chargeMode?: string, isp?: string, accessSite?: string, size?: number) { 
        this['charge_mode'] = chargeMode;
        this['isp'] = isp;
        this['access_site'] = accessSite;
        this['size'] = size;
    }
    public withIngressSize(ingressSize: number): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
    public withChargeMode(chargeMode: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withIsp(isp: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['isp'] = isp;
        return this;
    }
    public withAccessSite(accessSite: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withSize(size: number): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withName(name: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<CreateGlobalEipRequestBodyGlobalEipTags>): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): CreateInternetBandwidthRequestBodyInternetBandwidth {
        this['type'] = type;
        return this;
    }
}
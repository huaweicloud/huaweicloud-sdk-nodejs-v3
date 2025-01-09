import { SiteConfigsRequest } from './SiteConfigsRequest';


export class AddSiteReq {
    private 'site_configs'?: Array<SiteConfigsRequest>;
    public constructor(siteConfigs?: Array<SiteConfigsRequest>) { 
        this['site_configs'] = siteConfigs;
    }
    public withSiteConfigs(siteConfigs: Array<SiteConfigsRequest>): AddSiteReq {
        this['site_configs'] = siteConfigs;
        return this;
    }
    public set siteConfigs(siteConfigs: Array<SiteConfigsRequest>  | undefined) {
        this['site_configs'] = siteConfigs;
    }
    public get siteConfigs(): Array<SiteConfigsRequest> | undefined {
        return this['site_configs'];
    }
}
import { QuotaNoLimit } from './QuotaNoLimit';
import { ResourceNoLimit } from './ResourceNoLimit';


export class SiteQuotaNoLimit {
    public resources?: Array<ResourceNoLimit>;
    private 'site_id'?: string;
    public constructor(resources?: Array<ResourceNoLimit>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceNoLimit>): SiteQuotaNoLimit {
        this['resources'] = resources;
        return this;
    }
    public withSiteId(siteId: string): SiteQuotaNoLimit {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
}
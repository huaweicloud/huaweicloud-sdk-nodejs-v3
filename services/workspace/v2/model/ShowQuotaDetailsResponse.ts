import { ResourceNoLimit } from './ResourceNoLimit';
import { SiteQuotaNoLimit } from './SiteQuotaNoLimit';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaDetailsResponse extends SdkResponse {
    public resources?: Array<ResourceNoLimit>;
    private 'site_id'?: string;
    public constructor(resources?: Array<ResourceNoLimit>) { 
        super();
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceNoLimit>): ShowQuotaDetailsResponse {
        this['resources'] = resources;
        return this;
    }
    public withSiteId(siteId: string): ShowQuotaDetailsResponse {
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
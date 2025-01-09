import { QuotaNoLimit } from './QuotaNoLimit';
import { SiteQuotaNoLimit } from './SiteQuotaNoLimit';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: QuotaNoLimit;
    private 'site_quotas'?: Array<SiteQuotaNoLimit>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: QuotaNoLimit): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withSiteQuotas(siteQuotas: Array<SiteQuotaNoLimit>): ShowQuotasResponse {
        this['site_quotas'] = siteQuotas;
        return this;
    }
    public set siteQuotas(siteQuotas: Array<SiteQuotaNoLimit>  | undefined) {
        this['site_quotas'] = siteQuotas;
    }
    public get siteQuotas(): Array<SiteQuotaNoLimit> | undefined {
        return this['site_quotas'];
    }
}
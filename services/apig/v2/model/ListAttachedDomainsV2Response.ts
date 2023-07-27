import { BasePage } from './BasePage';
import { UrlDomainRefInfo } from './UrlDomainRefInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAttachedDomainsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'bound_domains'?: Array<UrlDomainRefInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAttachedDomainsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAttachedDomainsV2Response {
        this['total'] = total;
        return this;
    }
    public withBoundDomains(boundDomains: Array<UrlDomainRefInfo>): ListAttachedDomainsV2Response {
        this['bound_domains'] = boundDomains;
        return this;
    }
    public set boundDomains(boundDomains: Array<UrlDomainRefInfo>  | undefined) {
        this['bound_domains'] = boundDomains;
    }
    public get boundDomains(): Array<UrlDomainRefInfo> | undefined {
        return this['bound_domains'];
    }
}
import { BasePage } from './BasePage';
import { PortBindingDomainInfo } from './PortBindingDomainInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomIngressPortDomainsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'domain_infos'?: Array<PortBindingDomainInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListCustomIngressPortDomainsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListCustomIngressPortDomainsResponse {
        this['total'] = total;
        return this;
    }
    public withDomainInfos(domainInfos: Array<PortBindingDomainInfo>): ListCustomIngressPortDomainsResponse {
        this['domain_infos'] = domainInfos;
        return this;
    }
    public set domainInfos(domainInfos: Array<PortBindingDomainInfo>  | undefined) {
        this['domain_infos'] = domainInfos;
    }
    public get domainInfos(): Array<PortBindingDomainInfo> | undefined {
        return this['domain_infos'];
    }
}
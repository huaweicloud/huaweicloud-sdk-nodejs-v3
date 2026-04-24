import { AdDomain } from './AdDomain';
import { UosDomainInfo } from './UosDomainInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainsNewResponse extends SdkResponse {
    private 'uos_domain_list'?: Array<UosDomainInfo>;
    private 'domain_infos'?: Array<AdDomain>;
    public constructor() { 
        super();
    }
    public withUosDomainList(uosDomainList: Array<UosDomainInfo>): ShowDomainsNewResponse {
        this['uos_domain_list'] = uosDomainList;
        return this;
    }
    public set uosDomainList(uosDomainList: Array<UosDomainInfo>  | undefined) {
        this['uos_domain_list'] = uosDomainList;
    }
    public get uosDomainList(): Array<UosDomainInfo> | undefined {
        return this['uos_domain_list'];
    }
    public withDomainInfos(domainInfos: Array<AdDomain>): ShowDomainsNewResponse {
        this['domain_infos'] = domainInfos;
        return this;
    }
    public set domainInfos(domainInfos: Array<AdDomain>  | undefined) {
        this['domain_infos'] = domainInfos;
    }
    public get domainInfos(): Array<AdDomain> | undefined {
        return this['domain_infos'];
    }
}
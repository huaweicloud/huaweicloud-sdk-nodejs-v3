import { DecoupledLiveDomainInfo } from './DecoupledLiveDomainInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainResponse extends SdkResponse {
    public total?: number;
    private 'domain_info'?: Array<DecoupledLiveDomainInfo> | undefined;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowDomainResponse {
        this['total'] = total;
        return this;
    }
    public withDomainInfo(domainInfo: Array<DecoupledLiveDomainInfo>): ShowDomainResponse {
        this['domain_info'] = domainInfo;
        return this;
    }
    public set domainInfo(domainInfo: Array<DecoupledLiveDomainInfo> | undefined) {
        this['domain_info'] = domainInfo;
    }
    public get domainInfo() {
        return this['domain_info'];
    }
}
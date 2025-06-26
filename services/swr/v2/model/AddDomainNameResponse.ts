import { DomainNameInfo } from './DomainNameInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDomainNameResponse extends SdkResponse {
    private 'domain_name_info'?: DomainNameInfo;
    public constructor() { 
        super();
    }
    public withDomainNameInfo(domainNameInfo: DomainNameInfo): AddDomainNameResponse {
        this['domain_name_info'] = domainNameInfo;
        return this;
    }
    public set domainNameInfo(domainNameInfo: DomainNameInfo  | undefined) {
        this['domain_name_info'] = domainNameInfo;
    }
    public get domainNameInfo(): DomainNameInfo | undefined {
        return this['domain_name_info'];
    }
}
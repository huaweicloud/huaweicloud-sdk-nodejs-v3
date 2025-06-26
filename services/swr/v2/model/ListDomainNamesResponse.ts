import { DomainNameInfo } from './DomainNameInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainNamesResponse extends SdkResponse {
    private 'domain_name_infos'?: Array<DomainNameInfo>;
    public constructor() { 
        super();
    }
    public withDomainNameInfos(domainNameInfos: Array<DomainNameInfo>): ListDomainNamesResponse {
        this['domain_name_infos'] = domainNameInfos;
        return this;
    }
    public set domainNameInfos(domainNameInfos: Array<DomainNameInfo>  | undefined) {
        this['domain_name_infos'] = domainNameInfos;
    }
    public get domainNameInfos(): Array<DomainNameInfo> | undefined {
        return this['domain_name_infos'];
    }
}
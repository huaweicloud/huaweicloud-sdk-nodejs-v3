import { CreateDomainResponseBodyContent } from './CreateDomainResponseBodyContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    public domain?: CreateDomainResponseBodyContent;
    public constructor() { 
        super();
    }
    public withDomain(domain: CreateDomainResponseBodyContent): CreateDomainResponse {
        this['domain'] = domain;
        return this;
    }
}
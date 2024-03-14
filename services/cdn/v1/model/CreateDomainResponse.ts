import { CreateDomainResponseBodyContent } from './CreateDomainResponseBodyContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    public domain?: CreateDomainResponseBodyContent;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDomain(domain: CreateDomainResponseBodyContent): CreateDomainResponse {
        this['domain'] = domain;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateDomainResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
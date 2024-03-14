import { DomainsDetail } from './DomainsDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainDetailByNameResponse extends SdkResponse {
    public domain?: DomainsDetail;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainsDetail): ShowDomainDetailByNameResponse {
        this['domain'] = domain;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowDomainDetailByNameResponse {
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
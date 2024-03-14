import { Domains } from './Domains';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainsResponse extends SdkResponse {
    public total?: number;
    public domains?: Array<Domains>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDomainsResponse {
        this['total'] = total;
        return this;
    }
    public withDomains(domains: Array<Domains>): ListDomainsResponse {
        this['domains'] = domains;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDomainsResponse {
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
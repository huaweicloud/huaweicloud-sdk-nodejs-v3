import { TenantTrustedIpAddressDto } from './TenantTrustedIpAddressDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantTrustedIpAddressesResponse extends SdkResponse {
    public body?: Array<TenantTrustedIpAddressDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TenantTrustedIpAddressDto>): ListTenantTrustedIpAddressesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListTenantTrustedIpAddressesResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}
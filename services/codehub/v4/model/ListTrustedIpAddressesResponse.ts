import { TrustedIpAddressDto } from './TrustedIpAddressDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrustedIpAddressesResponse extends SdkResponse {
    public body?: Array<TrustedIpAddressDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TrustedIpAddressDto>): ListTrustedIpAddressesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListTrustedIpAddressesResponse {
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
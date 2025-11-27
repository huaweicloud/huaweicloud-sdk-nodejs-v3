import { BatchListVendorAccountResponseData } from './BatchListVendorAccountResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVendorAccountResponse extends SdkResponse {
    public data?: Array<BatchListVendorAccountResponseData>;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: Array<BatchListVendorAccountResponseData>): ListVendorAccountResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListVendorAccountResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListVendorAccountResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}
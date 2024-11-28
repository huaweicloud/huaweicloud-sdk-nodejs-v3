import { ListSupportInstancesSupportRegions } from './ListSupportInstancesSupportRegions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantGeipSupportInstancesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'support_regions'?: Array<ListSupportInstancesSupportRegions>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListTenantGeipSupportInstancesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSupportRegions(supportRegions: Array<ListSupportInstancesSupportRegions>): ListTenantGeipSupportInstancesResponse {
        this['support_regions'] = supportRegions;
        return this;
    }
    public set supportRegions(supportRegions: Array<ListSupportInstancesSupportRegions>  | undefined) {
        this['support_regions'] = supportRegions;
    }
    public get supportRegions(): Array<ListSupportInstancesSupportRegions> | undefined {
        return this['support_regions'];
    }
    public withXRequestId(xRequestId: string): ListTenantGeipSupportInstancesResponse {
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
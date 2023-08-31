import { PageInfo } from './PageInfo';
import { PrivateNat } from './PrivateNat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateNatsResponse extends SdkResponse {
    public gateways?: Array<PrivateNat>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withGateways(gateways: Array<PrivateNat>): ListPrivateNatsResponse {
        this['gateways'] = gateways;
        return this;
    }
    public withRequestId(requestId: string): ListPrivateNatsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateNatsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}
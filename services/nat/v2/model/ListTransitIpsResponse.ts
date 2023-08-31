import { PageInfo } from './PageInfo';
import { TransitIp } from './TransitIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransitIpsResponse extends SdkResponse {
    private 'transit_ips'?: Array<TransitIp>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTransitIps(transitIps: Array<TransitIp>): ListTransitIpsResponse {
        this['transit_ips'] = transitIps;
        return this;
    }
    public set transitIps(transitIps: Array<TransitIp>  | undefined) {
        this['transit_ips'] = transitIps;
    }
    public get transitIps(): Array<TransitIp> | undefined {
        return this['transit_ips'];
    }
    public withPageInfo(pageInfo: PageInfo): ListTransitIpsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListTransitIpsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}
import { PageInfo } from './PageInfo';
import { TransitSubnet } from './TransitSubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransitSubnetResponse extends SdkResponse {
    private 'transit_subnets'?: Array<TransitSubnet>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withTransitSubnets(transitSubnets: Array<TransitSubnet>): ListTransitSubnetResponse {
        this['transit_subnets'] = transitSubnets;
        return this;
    }
    public set transitSubnets(transitSubnets: Array<TransitSubnet>  | undefined) {
        this['transit_subnets'] = transitSubnets;
    }
    public get transitSubnets(): Array<TransitSubnet> | undefined {
        return this['transit_subnets'];
    }
    public withRequestId(requestId: string): ListTransitSubnetResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListTransitSubnetResponse {
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
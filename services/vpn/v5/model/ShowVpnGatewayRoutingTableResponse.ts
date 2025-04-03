import { PageInfo } from './PageInfo';
import { VpnGatewayRoutingTableEntryVo } from './VpnGatewayRoutingTableEntryVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpnGatewayRoutingTableResponse extends SdkResponse {
    private 'routing_table'?: Array<VpnGatewayRoutingTableEntryVo>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRoutingTable(routingTable: Array<VpnGatewayRoutingTableEntryVo>): ShowVpnGatewayRoutingTableResponse {
        this['routing_table'] = routingTable;
        return this;
    }
    public set routingTable(routingTable: Array<VpnGatewayRoutingTableEntryVo>  | undefined) {
        this['routing_table'] = routingTable;
    }
    public get routingTable(): Array<VpnGatewayRoutingTableEntryVo> | undefined {
        return this['routing_table'];
    }
    public withTotalCount(totalCount: number): ShowVpnGatewayRoutingTableResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ShowVpnGatewayRoutingTableResponse {
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
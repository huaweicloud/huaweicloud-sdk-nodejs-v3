import { ConnectGatewayResponse } from './ConnectGatewayResponse';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectGatewaysResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'connect_gateways'?: Array<ConnectGatewayResponse>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListConnectGatewaysResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withConnectGateways(connectGateways: Array<ConnectGatewayResponse>): ListConnectGatewaysResponse {
        this['connect_gateways'] = connectGateways;
        return this;
    }
    public set connectGateways(connectGateways: Array<ConnectGatewayResponse>  | undefined) {
        this['connect_gateways'] = connectGateways;
    }
    public get connectGateways(): Array<ConnectGatewayResponse> | undefined {
        return this['connect_gateways'];
    }
    public withTotalCount(totalCount: number): ListConnectGatewaysResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListConnectGatewaysResponse {
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
import { GlobalDcGatewayEntry } from './GlobalDcGatewayEntry';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalDcGatewaysResponse extends SdkResponse {
    private 'global_dc_gateways'?: Array<GlobalDcGatewayEntry>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withGlobalDcGateways(globalDcGateways: Array<GlobalDcGatewayEntry>): ListGlobalDcGatewaysResponse {
        this['global_dc_gateways'] = globalDcGateways;
        return this;
    }
    public set globalDcGateways(globalDcGateways: Array<GlobalDcGatewayEntry>  | undefined) {
        this['global_dc_gateways'] = globalDcGateways;
    }
    public get globalDcGateways(): Array<GlobalDcGatewayEntry> | undefined {
        return this['global_dc_gateways'];
    }
    public withPageInfo(pageInfo: PageInfo): ListGlobalDcGatewaysResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListGlobalDcGatewaysResponse {
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
import { PageInfo } from './PageInfo';
import { VirtualGateway } from './VirtualGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVirtualGatewaysResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'virtual_gateways'?: Array<VirtualGateway>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListVirtualGatewaysResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVirtualGateways(virtualGateways: Array<VirtualGateway>): ListVirtualGatewaysResponse {
        this['virtual_gateways'] = virtualGateways;
        return this;
    }
    public set virtualGateways(virtualGateways: Array<VirtualGateway>  | undefined) {
        this['virtual_gateways'] = virtualGateways;
    }
    public get virtualGateways(): Array<VirtualGateway> | undefined {
        return this['virtual_gateways'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVirtualGatewaysResponse {
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
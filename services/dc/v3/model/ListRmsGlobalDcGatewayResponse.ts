import { PageInfo } from './PageInfo';
import { RmsListGlobalDcGateways } from './RmsListGlobalDcGateways';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRmsGlobalDcGatewayResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_dc_gateways'?: Array<RmsListGlobalDcGateways>;
    private 'page_info'?: PageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListRmsGlobalDcGatewayResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalDcGateways(globalDcGateways: Array<RmsListGlobalDcGateways>): ListRmsGlobalDcGatewayResponse {
        this['global_dc_gateways'] = globalDcGateways;
        return this;
    }
    public set globalDcGateways(globalDcGateways: Array<RmsListGlobalDcGateways>  | undefined) {
        this['global_dc_gateways'] = globalDcGateways;
    }
    public get globalDcGateways(): Array<RmsListGlobalDcGateways> | undefined {
        return this['global_dc_gateways'];
    }
    public withPageInfo(pageInfo: PageInfo): ListRmsGlobalDcGatewayResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListRmsGlobalDcGatewayResponse {
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
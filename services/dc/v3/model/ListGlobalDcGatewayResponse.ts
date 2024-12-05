import { ExternalListGlobalDcGateways } from './ExternalListGlobalDcGateways';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalDcGatewayResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_dc_gateways'?: Array<ExternalListGlobalDcGateways>;
    private 'page_info'?: PageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGlobalDcGatewayResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalDcGateways(globalDcGateways: Array<ExternalListGlobalDcGateways>): ListGlobalDcGatewayResponse {
        this['global_dc_gateways'] = globalDcGateways;
        return this;
    }
    public set globalDcGateways(globalDcGateways: Array<ExternalListGlobalDcGateways>  | undefined) {
        this['global_dc_gateways'] = globalDcGateways;
    }
    public get globalDcGateways(): Array<ExternalListGlobalDcGateways> | undefined {
        return this['global_dc_gateways'];
    }
    public withPageInfo(pageInfo: PageInfo): ListGlobalDcGatewayResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListGlobalDcGatewayResponse {
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
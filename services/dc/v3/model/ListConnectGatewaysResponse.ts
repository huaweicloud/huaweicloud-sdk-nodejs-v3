import { ConnectGatewayResponse } from './ConnectGatewayResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectGatewaysResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'connect_gateways'?: Array<ConnectGatewayResponse>;
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
}
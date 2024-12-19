import { ConnectGatewayResponse } from './ConnectGatewayResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConnectGatewayResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'connect_gateway'?: ConnectGatewayResponse;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateConnectGatewayResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withConnectGateway(connectGateway: ConnectGatewayResponse): UpdateConnectGatewayResponse {
        this['connect_gateway'] = connectGateway;
        return this;
    }
    public set connectGateway(connectGateway: ConnectGatewayResponse  | undefined) {
        this['connect_gateway'] = connectGateway;
    }
    public get connectGateway(): ConnectGatewayResponse | undefined {
        return this['connect_gateway'];
    }
}
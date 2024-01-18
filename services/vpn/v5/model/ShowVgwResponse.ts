import { ResponseVpnGateway } from './ResponseVpnGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVgwResponse extends SdkResponse {
    private 'vpn_gateway'?: ResponseVpnGateway;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpnGateway(vpnGateway: ResponseVpnGateway): ShowVgwResponse {
        this['vpn_gateway'] = vpnGateway;
        return this;
    }
    public set vpnGateway(vpnGateway: ResponseVpnGateway  | undefined) {
        this['vpn_gateway'] = vpnGateway;
    }
    public get vpnGateway(): ResponseVpnGateway | undefined {
        return this['vpn_gateway'];
    }
    public withRequestId(requestId: string): ShowVgwResponse {
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
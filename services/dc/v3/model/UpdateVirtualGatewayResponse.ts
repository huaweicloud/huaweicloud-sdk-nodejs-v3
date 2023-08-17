import { VirtualGateway } from './VirtualGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVirtualGatewayResponse extends SdkResponse {
    private 'virtual_gateway'?: VirtualGateway;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVirtualGateway(virtualGateway: VirtualGateway): UpdateVirtualGatewayResponse {
        this['virtual_gateway'] = virtualGateway;
        return this;
    }
    public set virtualGateway(virtualGateway: VirtualGateway  | undefined) {
        this['virtual_gateway'] = virtualGateway;
    }
    public get virtualGateway(): VirtualGateway | undefined {
        return this['virtual_gateway'];
    }
    public withRequestId(requestId: string): UpdateVirtualGatewayResponse {
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
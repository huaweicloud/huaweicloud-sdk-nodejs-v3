import { CreatePeerLinkRequestBody } from './CreatePeerLinkRequestBody';


export class CreatePeerLinkRequest {
    private 'global_dc_gateway_id'?: string;
    public body?: CreatePeerLinkRequestBody;
    public constructor(globalDcGatewayId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): CreatePeerLinkRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withBody(body: CreatePeerLinkRequestBody): CreatePeerLinkRequest {
        this['body'] = body;
        return this;
    }
}
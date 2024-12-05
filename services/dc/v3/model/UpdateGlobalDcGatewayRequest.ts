import { UpdateGlobalDcGatewayRequestBody } from './UpdateGlobalDcGatewayRequestBody';


export class UpdateGlobalDcGatewayRequest {
    private 'global_dc_gateway_id'?: string;
    public body?: UpdateGlobalDcGatewayRequestBody;
    public constructor(globalDcGatewayId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): UpdateGlobalDcGatewayRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withBody(body: UpdateGlobalDcGatewayRequestBody): UpdateGlobalDcGatewayRequest {
        this['body'] = body;
        return this;
    }
}
import { UpdatePrivateNatRequestBody } from './UpdatePrivateNatRequestBody';


export class UpdatePrivateNatRequest {
    private 'gateway_id'?: string;
    public body?: UpdatePrivateNatRequestBody;
    public constructor(gatewayId?: string) { 
        this['gateway_id'] = gatewayId;
    }
    public withGatewayId(gatewayId: string): UpdatePrivateNatRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withBody(body: UpdatePrivateNatRequestBody): UpdatePrivateNatRequest {
        this['body'] = body;
        return this;
    }
}
import { CreateUnbindingGeipRequestBody } from './CreateUnbindingGeipRequestBody';


export class UnbindGlobalEipsRequest {
    private 'connect_gateway_id'?: string;
    public body?: CreateUnbindingGeipRequestBody;
    public constructor(connectGatewayId?: string) { 
        this['connect_gateway_id'] = connectGatewayId;
    }
    public withConnectGatewayId(connectGatewayId: string): UnbindGlobalEipsRequest {
        this['connect_gateway_id'] = connectGatewayId;
        return this;
    }
    public set connectGatewayId(connectGatewayId: string  | undefined) {
        this['connect_gateway_id'] = connectGatewayId;
    }
    public get connectGatewayId(): string | undefined {
        return this['connect_gateway_id'];
    }
    public withBody(body: CreateUnbindingGeipRequestBody): UnbindGlobalEipsRequest {
        this['body'] = body;
        return this;
    }
}
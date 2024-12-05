import { CreateBindingGeipRequestBody } from './CreateBindingGeipRequestBody';


export class BindGlobalEipsRequest {
    private 'connect_gateway_id'?: string;
    public body?: CreateBindingGeipRequestBody;
    public constructor(connectGatewayId?: string) { 
        this['connect_gateway_id'] = connectGatewayId;
    }
    public withConnectGatewayId(connectGatewayId: string): BindGlobalEipsRequest {
        this['connect_gateway_id'] = connectGatewayId;
        return this;
    }
    public set connectGatewayId(connectGatewayId: string  | undefined) {
        this['connect_gateway_id'] = connectGatewayId;
    }
    public get connectGatewayId(): string | undefined {
        return this['connect_gateway_id'];
    }
    public withBody(body: CreateBindingGeipRequestBody): BindGlobalEipsRequest {
        this['body'] = body;
        return this;
    }
}
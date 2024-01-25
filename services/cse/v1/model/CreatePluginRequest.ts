import { WasmPlugin } from './WasmPlugin';


export class CreatePluginRequest {
    private 'gateway_id'?: string;
    private 'Accept'?: string;
    public body?: WasmPlugin;
    public constructor(gatewayId?: string) { 
        this['gateway_id'] = gatewayId;
    }
    public withGatewayId(gatewayId: string): CreatePluginRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withAccept(accept: string): CreatePluginRequest {
        this['Accept'] = accept;
        return this;
    }
    public set accept(accept: string  | undefined) {
        this['Accept'] = accept;
    }
    public get accept(): string | undefined {
        return this['Accept'];
    }
    public withBody(body: WasmPlugin): CreatePluginRequest {
        this['body'] = body;
        return this;
    }
}
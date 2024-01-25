import { WasmPlugin } from './WasmPlugin';


export class ModifyPluginRequest {
    private 'gateway_id'?: string;
    private 'plugin_id'?: string;
    private 'Accept'?: string;
    public body?: WasmPlugin;
    public constructor(gatewayId?: string, pluginId?: string) { 
        this['gateway_id'] = gatewayId;
        this['plugin_id'] = pluginId;
    }
    public withGatewayId(gatewayId: string): ModifyPluginRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withPluginId(pluginId: string): ModifyPluginRequest {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withAccept(accept: string): ModifyPluginRequest {
        this['Accept'] = accept;
        return this;
    }
    public set accept(accept: string  | undefined) {
        this['Accept'] = accept;
    }
    public get accept(): string | undefined {
        return this['Accept'];
    }
    public withBody(body: WasmPlugin): ModifyPluginRequest {
        this['body'] = body;
        return this;
    }
}
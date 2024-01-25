import { Http2Rpc } from './Http2Rpc';


export class CreateHttp2RpcRequest {
    private 'gateway_id'?: string;
    private 'Accept'?: string;
    public body?: Http2Rpc;
    public constructor(gatewayId?: string) { 
        this['gateway_id'] = gatewayId;
    }
    public withGatewayId(gatewayId: string): CreateHttp2RpcRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withAccept(accept: string): CreateHttp2RpcRequest {
        this['Accept'] = accept;
        return this;
    }
    public set accept(accept: string  | undefined) {
        this['Accept'] = accept;
    }
    public get accept(): string | undefined {
        return this['Accept'];
    }
    public withBody(body: Http2Rpc): CreateHttp2RpcRequest {
        this['body'] = body;
        return this;
    }
}
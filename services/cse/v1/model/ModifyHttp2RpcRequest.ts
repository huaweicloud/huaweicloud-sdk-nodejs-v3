import { Http2Rpc } from './Http2Rpc';


export class ModifyHttp2RpcRequest {
    private 'gateway_id'?: string;
    private 'http2Rpc_id'?: string;
    private 'Accept'?: string;
    public body?: Http2Rpc;
    public constructor(gatewayId?: string, http2RpcId?: string) { 
        this['gateway_id'] = gatewayId;
        this['http2Rpc_id'] = http2RpcId;
    }
    public withGatewayId(gatewayId: string): ModifyHttp2RpcRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withHttp2RpcId(http2RpcId: string): ModifyHttp2RpcRequest {
        this['http2Rpc_id'] = http2RpcId;
        return this;
    }
    public set http2RpcId(http2RpcId: string  | undefined) {
        this['http2Rpc_id'] = http2RpcId;
    }
    public get http2RpcId(): string | undefined {
        return this['http2Rpc_id'];
    }
    public withAccept(accept: string): ModifyHttp2RpcRequest {
        this['Accept'] = accept;
        return this;
    }
    public set accept(accept: string  | undefined) {
        this['Accept'] = accept;
    }
    public get accept(): string | undefined {
        return this['Accept'];
    }
    public withBody(body: Http2Rpc): ModifyHttp2RpcRequest {
        this['body'] = body;
        return this;
    }
}
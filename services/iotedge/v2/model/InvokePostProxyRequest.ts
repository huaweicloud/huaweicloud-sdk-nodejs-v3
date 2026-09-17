

export class InvokePostProxyRequest {
    private 'node_id'?: string;
    private 'ia_id'?: string;
    private 'ia_uri'?: string;
    public body?: object;
    public constructor(nodeId?: string, iaId?: string, iaUri?: string) { 
        this['node_id'] = nodeId;
        this['ia_id'] = iaId;
        this['ia_uri'] = iaUri;
    }
    public withNodeId(nodeId: string): InvokePostProxyRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIaId(iaId: string): InvokePostProxyRequest {
        this['ia_id'] = iaId;
        return this;
    }
    public set iaId(iaId: string  | undefined) {
        this['ia_id'] = iaId;
    }
    public get iaId(): string | undefined {
        return this['ia_id'];
    }
    public withIaUri(iaUri: string): InvokePostProxyRequest {
        this['ia_uri'] = iaUri;
        return this;
    }
    public set iaUri(iaUri: string  | undefined) {
        this['ia_uri'] = iaUri;
    }
    public get iaUri(): string | undefined {
        return this['ia_uri'];
    }
    public withBody(body: object): InvokePostProxyRequest {
        this['body'] = body;
        return this;
    }
}
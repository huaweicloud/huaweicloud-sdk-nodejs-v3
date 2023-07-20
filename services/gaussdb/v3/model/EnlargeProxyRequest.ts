

export class EnlargeProxyRequest {
    private 'node_num'?: number;
    private 'proxy_id'?: string;
    public constructor(nodeNum?: number) { 
        this['node_num'] = nodeNum;
    }
    public withNodeNum(nodeNum: number): EnlargeProxyRequest {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withProxyId(proxyId: string): EnlargeProxyRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
}
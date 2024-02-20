

export class HangUpClientsRequestBody {
    private 'node_id'?: string;
    private 'client_addrs'?: Array<string>;
    public constructor(nodeId?: string, clientAddrs?: Array<string>) { 
        this['node_id'] = nodeId;
        this['client_addrs'] = clientAddrs;
    }
    public withNodeId(nodeId: string): HangUpClientsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withClientAddrs(clientAddrs: Array<string>): HangUpClientsRequestBody {
        this['client_addrs'] = clientAddrs;
        return this;
    }
    public set clientAddrs(clientAddrs: Array<string>  | undefined) {
        this['client_addrs'] = clientAddrs;
    }
    public get clientAddrs(): Array<string> | undefined {
        return this['client_addrs'];
    }
}
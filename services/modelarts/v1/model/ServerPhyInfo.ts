

export class ServerPhyInfo {
    private 'resource_id'?: string;
    private 'network_nodes'?: Array<string>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ServerPhyInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withNetworkNodes(networkNodes: Array<string>): ServerPhyInfo {
        this['network_nodes'] = networkNodes;
        return this;
    }
    public set networkNodes(networkNodes: Array<string>  | undefined) {
        this['network_nodes'] = networkNodes;
    }
    public get networkNodes(): Array<string> | undefined {
        return this['network_nodes'];
    }
}
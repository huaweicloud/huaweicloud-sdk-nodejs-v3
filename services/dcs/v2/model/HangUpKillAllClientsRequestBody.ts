

export class HangUpKillAllClientsRequestBody {
    private 'node_id'?: string;
    private 'kill_all_nodes'?: boolean;
    public constructor() { 
    }
    public withNodeId(nodeId: string): HangUpKillAllClientsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKillAllNodes(killAllNodes: boolean): HangUpKillAllClientsRequestBody {
        this['kill_all_nodes'] = killAllNodes;
        return this;
    }
    public set killAllNodes(killAllNodes: boolean  | undefined) {
        this['kill_all_nodes'] = killAllNodes;
    }
    public get killAllNodes(): boolean | undefined {
        return this['kill_all_nodes'];
    }
}
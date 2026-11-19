

export class TaurusSwitchoverRequest {
    private 'node_id'?: string;
    public force?: boolean;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): TaurusSwitchoverRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withForce(force: boolean): TaurusSwitchoverRequest {
        this['force'] = force;
        return this;
    }
}
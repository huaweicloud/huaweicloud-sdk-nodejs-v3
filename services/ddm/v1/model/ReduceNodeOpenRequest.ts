

export class ReduceNodeOpenRequest {
    private 'instance_id'?: string;
    private 'node_ids'?: Array<string>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ReduceNodeOpenRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ReduceNodeOpenRequest {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}
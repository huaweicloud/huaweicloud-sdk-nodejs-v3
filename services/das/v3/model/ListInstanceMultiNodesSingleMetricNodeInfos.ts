

export class ListInstanceMultiNodesSingleMetricNodeInfos {
    private 'instance_id'?: string;
    private 'node_ids'?: Array<string>;
    public constructor(instanceId?: string, nodeIds?: Array<string>) { 
        this['instance_id'] = instanceId;
        this['node_ids'] = nodeIds;
    }
    public withInstanceId(instanceId: string): ListInstanceMultiNodesSingleMetricNodeInfos {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeIds(nodeIds: Array<string>): ListInstanceMultiNodesSingleMetricNodeInfos {
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
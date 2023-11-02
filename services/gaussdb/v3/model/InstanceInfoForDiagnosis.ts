

export class InstanceInfoForDiagnosis {
    private 'instance_id'?: string;
    private 'master_node_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceInfoForDiagnosis {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMasterNodeId(masterNodeId: string): InstanceInfoForDiagnosis {
        this['master_node_id'] = masterNodeId;
        return this;
    }
    public set masterNodeId(masterNodeId: string  | undefined) {
        this['master_node_id'] = masterNodeId;
    }
    public get masterNodeId(): string | undefined {
        return this['master_node_id'];
    }
}
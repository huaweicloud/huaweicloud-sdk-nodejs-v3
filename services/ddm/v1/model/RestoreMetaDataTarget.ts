

export class RestoreMetaDataTarget {
    private 'data_nodes'?: Array<string>;
    private 'instance_id'?: string;
    public constructor(dataNodes?: Array<string>, instanceId?: string) { 
        this['data_nodes'] = dataNodes;
        this['instance_id'] = instanceId;
    }
    public withDataNodes(dataNodes: Array<string>): RestoreMetaDataTarget {
        this['data_nodes'] = dataNodes;
        return this;
    }
    public set dataNodes(dataNodes: Array<string>  | undefined) {
        this['data_nodes'] = dataNodes;
    }
    public get dataNodes(): Array<string> | undefined {
        return this['data_nodes'];
    }
    public withInstanceId(instanceId: string): RestoreMetaDataTarget {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}
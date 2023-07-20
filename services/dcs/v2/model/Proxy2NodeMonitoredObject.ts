

export class Proxy2NodeMonitoredObject {
    private 'dcs_instance_id'?: string;
    public name?: string;
    private 'dcs_cluster_proxy2_node'?: string;
    public status?: string;
    public constructor() { 
    }
    public withDcsInstanceId(dcsInstanceId: string): Proxy2NodeMonitoredObject {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string  | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId(): string | undefined {
        return this['dcs_instance_id'];
    }
    public withName(name: string): Proxy2NodeMonitoredObject {
        this['name'] = name;
        return this;
    }
    public withDcsClusterProxy2Node(dcsClusterProxy2Node: string): Proxy2NodeMonitoredObject {
        this['dcs_cluster_proxy2_node'] = dcsClusterProxy2Node;
        return this;
    }
    public set dcsClusterProxy2Node(dcsClusterProxy2Node: string  | undefined) {
        this['dcs_cluster_proxy2_node'] = dcsClusterProxy2Node;
    }
    public get dcsClusterProxy2Node(): string | undefined {
        return this['dcs_cluster_proxy2_node'];
    }
    public withStatus(status: string): Proxy2NodeMonitoredObject {
        this['status'] = status;
        return this;
    }
}
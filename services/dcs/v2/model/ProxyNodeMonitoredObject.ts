

export class ProxyNodeMonitoredObject {
    private 'dcs_instance_id'?: string | undefined;
    public name?: string;
    private 'dcs_cluster_proxy_node'?: string | undefined;
    public status?: string;
    public constructor() { 
    }
    public withDcsInstanceId(dcsInstanceId: string): ProxyNodeMonitoredObject {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId() {
        return this['dcs_instance_id'];
    }
    public withName(name: string): ProxyNodeMonitoredObject {
        this['name'] = name;
        return this;
    }
    public withDcsClusterProxyNode(dcsClusterProxyNode: string): ProxyNodeMonitoredObject {
        this['dcs_cluster_proxy_node'] = dcsClusterProxyNode;
        return this;
    }
    public set dcsClusterProxyNode(dcsClusterProxyNode: string | undefined) {
        this['dcs_cluster_proxy_node'] = dcsClusterProxyNode;
    }
    public get dcsClusterProxyNode() {
        return this['dcs_cluster_proxy_node'];
    }
    public withStatus(status: string): ProxyNodeMonitoredObject {
        this['status'] = status;
        return this;
    }
}
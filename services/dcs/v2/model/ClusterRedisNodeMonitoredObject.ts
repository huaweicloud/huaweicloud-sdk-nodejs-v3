

export class ClusterRedisNodeMonitoredObject {
    private 'dcs_instance_id'?: string;
    public name?: string;
    private 'dcs_cluster_redis_node'?: string;
    public status?: string;
    public constructor() { 
    }
    public withDcsInstanceId(dcsInstanceId: string): ClusterRedisNodeMonitoredObject {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string  | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId(): string | undefined {
        return this['dcs_instance_id'];
    }
    public withName(name: string): ClusterRedisNodeMonitoredObject {
        this['name'] = name;
        return this;
    }
    public withDcsClusterRedisNode(dcsClusterRedisNode: string): ClusterRedisNodeMonitoredObject {
        this['dcs_cluster_redis_node'] = dcsClusterRedisNode;
        return this;
    }
    public set dcsClusterRedisNode(dcsClusterRedisNode: string  | undefined) {
        this['dcs_cluster_redis_node'] = dcsClusterRedisNode;
    }
    public get dcsClusterRedisNode(): string | undefined {
        return this['dcs_cluster_redis_node'];
    }
    public withStatus(status: string): ClusterRedisNodeMonitoredObject {
        this['status'] = status;
        return this;
    }
}
import { ClusterRedisNodeMonitoredObject } from './ClusterRedisNodeMonitoredObject';
import { DimChild } from './DimChild';
import { InstancesMonitoredObject } from './InstancesMonitoredObject';
import { Proxy2NodeMonitoredObject } from './Proxy2NodeMonitoredObject';
import { ProxyNodeMonitoredObject } from './ProxyNodeMonitoredObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMonitoredObjectsOfInstanceResponse extends SdkResponse {
    public router?: Array<string>;
    public children?: Array<DimChild>;
    public instances?: Array<InstancesMonitoredObject>;
    private 'dcs_cluster_redis_node'?: Array<ClusterRedisNodeMonitoredObject> | undefined;
    private 'dcs_cluster_proxy_node'?: Array<ProxyNodeMonitoredObject> | undefined;
    private 'dcs_cluster_proxy2_node'?: Array<Proxy2NodeMonitoredObject> | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRouter(router: Array<string>): ListMonitoredObjectsOfInstanceResponse {
        this['router'] = router;
        return this;
    }
    public withChildren(children: Array<DimChild>): ListMonitoredObjectsOfInstanceResponse {
        this['children'] = children;
        return this;
    }
    public withInstances(instances: Array<InstancesMonitoredObject>): ListMonitoredObjectsOfInstanceResponse {
        this['instances'] = instances;
        return this;
    }
    public withDcsClusterRedisNode(dcsClusterRedisNode: Array<ClusterRedisNodeMonitoredObject>): ListMonitoredObjectsOfInstanceResponse {
        this['dcs_cluster_redis_node'] = dcsClusterRedisNode;
        return this;
    }
    public set dcsClusterRedisNode(dcsClusterRedisNode: Array<ClusterRedisNodeMonitoredObject> | undefined) {
        this['dcs_cluster_redis_node'] = dcsClusterRedisNode;
    }
    public get dcsClusterRedisNode() {
        return this['dcs_cluster_redis_node'];
    }
    public withDcsClusterProxyNode(dcsClusterProxyNode: Array<ProxyNodeMonitoredObject>): ListMonitoredObjectsOfInstanceResponse {
        this['dcs_cluster_proxy_node'] = dcsClusterProxyNode;
        return this;
    }
    public set dcsClusterProxyNode(dcsClusterProxyNode: Array<ProxyNodeMonitoredObject> | undefined) {
        this['dcs_cluster_proxy_node'] = dcsClusterProxyNode;
    }
    public get dcsClusterProxyNode() {
        return this['dcs_cluster_proxy_node'];
    }
    public withDcsClusterProxy2Node(dcsClusterProxy2Node: Array<Proxy2NodeMonitoredObject>): ListMonitoredObjectsOfInstanceResponse {
        this['dcs_cluster_proxy2_node'] = dcsClusterProxy2Node;
        return this;
    }
    public set dcsClusterProxy2Node(dcsClusterProxy2Node: Array<Proxy2NodeMonitoredObject> | undefined) {
        this['dcs_cluster_proxy2_node'] = dcsClusterProxy2Node;
    }
    public get dcsClusterProxy2Node() {
        return this['dcs_cluster_proxy2_node'];
    }
    public withTotal(total: number): ListMonitoredObjectsOfInstanceResponse {
        this['total'] = total;
        return this;
    }
}
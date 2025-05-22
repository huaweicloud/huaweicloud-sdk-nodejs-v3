import { TopologyInfo } from './TopologyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceTopologyResponse extends SdkResponse {
    private 'redis_server'?: Array<TopologyInfo>;
    private 'cluster_lvs'?: Array<TopologyInfo>;
    private 'cluster_admin'?: Array<TopologyInfo>;
    private 'cluster_proxy'?: Array<TopologyInfo>;
    public master?: Array<TopologyInfo>;
    public vpcendpoint?: Array<TopologyInfo>;
    public elb?: Array<TopologyInfo>;
    public constructor() { 
        super();
    }
    public withRedisServer(redisServer: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['redis_server'] = redisServer;
        return this;
    }
    public set redisServer(redisServer: Array<TopologyInfo>  | undefined) {
        this['redis_server'] = redisServer;
    }
    public get redisServer(): Array<TopologyInfo> | undefined {
        return this['redis_server'];
    }
    public withClusterLvs(clusterLvs: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['cluster_lvs'] = clusterLvs;
        return this;
    }
    public set clusterLvs(clusterLvs: Array<TopologyInfo>  | undefined) {
        this['cluster_lvs'] = clusterLvs;
    }
    public get clusterLvs(): Array<TopologyInfo> | undefined {
        return this['cluster_lvs'];
    }
    public withClusterAdmin(clusterAdmin: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['cluster_admin'] = clusterAdmin;
        return this;
    }
    public set clusterAdmin(clusterAdmin: Array<TopologyInfo>  | undefined) {
        this['cluster_admin'] = clusterAdmin;
    }
    public get clusterAdmin(): Array<TopologyInfo> | undefined {
        return this['cluster_admin'];
    }
    public withClusterProxy(clusterProxy: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['cluster_proxy'] = clusterProxy;
        return this;
    }
    public set clusterProxy(clusterProxy: Array<TopologyInfo>  | undefined) {
        this['cluster_proxy'] = clusterProxy;
    }
    public get clusterProxy(): Array<TopologyInfo> | undefined {
        return this['cluster_proxy'];
    }
    public withMaster(master: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['master'] = master;
        return this;
    }
    public withVpcendpoint(vpcendpoint: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['vpcendpoint'] = vpcendpoint;
        return this;
    }
    public withElb(elb: Array<TopologyInfo>): ShowInstanceTopologyResponse {
        this['elb'] = elb;
        return this;
    }
}
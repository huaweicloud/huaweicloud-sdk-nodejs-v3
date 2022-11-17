import { SpecClusterNode } from './SpecClusterNode';


export class Spec {
    public id?: number;
    private 'engine_id'?: string | undefined;
    private 'spec_type'?: SpecSpecTypeEnum | undefined;
    public cluster?: string;
    private 'cluster_id'?: string | undefined;
    private 'cluster_nodes'?: SpecClusterNode | undefined;
    public flavor?: string;
    public region?: string;
    public version?: string;
    private 'extend_param'?: string | undefined;
    public constructor() { 
    }
    public withId(id: number): Spec {
        this['id'] = id;
        return this;
    }
    public withEngineId(engineId: string): Spec {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId() {
        return this['engine_id'];
    }
    public withSpecType(specType: SpecSpecTypeEnum): Spec {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: SpecSpecTypeEnum | undefined) {
        this['spec_type'] = specType;
    }
    public get specType() {
        return this['spec_type'];
    }
    public withCluster(cluster: string): Spec {
        this['cluster'] = cluster;
        return this;
    }
    public withClusterId(clusterId: string): Spec {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterNodes(clusterNodes: SpecClusterNode): Spec {
        this['cluster_nodes'] = clusterNodes;
        return this;
    }
    public set clusterNodes(clusterNodes: SpecClusterNode | undefined) {
        this['cluster_nodes'] = clusterNodes;
    }
    public get clusterNodes() {
        return this['cluster_nodes'];
    }
    public withFlavor(flavor: string): Spec {
        this['flavor'] = flavor;
        return this;
    }
    public withRegion(region: string): Spec {
        this['region'] = region;
        return this;
    }
    public withVersion(version: string): Spec {
        this['version'] = version;
        return this;
    }
    public withExtendParam(extendParam: string): Spec {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: string | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam() {
        return this['extend_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SpecSpecTypeEnum {
    CCE = 'CCE',
    CSE = 'CSE',
    SPRINGCLOUD = 'SpringCloud'
}

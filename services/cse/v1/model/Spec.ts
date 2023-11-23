import { SpecClusterNode } from './SpecClusterNode';


export class Spec {
    public id?: number;
    public engineId?: string;
    public specType?: SpecSpecTypeEnum | string;
    public cluster?: string;
    public clusterId?: string;
    public clusterNodes?: SpecClusterNode;
    public flavor?: string;
    public region?: string;
    public version?: string;
    public extendParam?: string;
    public constructor() { 
    }
    public withId(id: number): Spec {
        this['id'] = id;
        return this;
    }
    public withEngineId(engineId: string): Spec {
        this['engineId'] = engineId;
        return this;
    }
    public withSpecType(specType: SpecSpecTypeEnum | string): Spec {
        this['specType'] = specType;
        return this;
    }
    public withCluster(cluster: string): Spec {
        this['cluster'] = cluster;
        return this;
    }
    public withClusterId(clusterId: string): Spec {
        this['clusterId'] = clusterId;
        return this;
    }
    public withClusterNodes(clusterNodes: SpecClusterNode): Spec {
        this['clusterNodes'] = clusterNodes;
        return this;
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
        this['extendParam'] = extendParam;
        return this;
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



export class EngineCreateReqEnginestateInfo {
    public cluster?: boolean;
    public twinClusters?: boolean;
    public singleEngine?: boolean;
    public constructor() { 
    }
    public withCluster(cluster: boolean): EngineCreateReqEnginestateInfo {
        this['cluster'] = cluster;
        return this;
    }
    public withTwinClusters(twinClusters: boolean): EngineCreateReqEnginestateInfo {
        this['twinClusters'] = twinClusters;
        return this;
    }
    public withSingleEngine(singleEngine: boolean): EngineCreateReqEnginestateInfo {
        this['singleEngine'] = singleEngine;
        return this;
    }
}
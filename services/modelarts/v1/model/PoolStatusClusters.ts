import { PoolStatusClustersPlugins } from './PoolStatusClustersPlugins';


export class PoolStatusClusters {
    public name?: string;
    public clusterFlavor?: string;
    public type?: string;
    public version?: string;
    public plugins?: PoolStatusClustersPlugins;
    public constructor() { 
    }
    public withName(name: string): PoolStatusClusters {
        this['name'] = name;
        return this;
    }
    public withClusterFlavor(clusterFlavor: string): PoolStatusClusters {
        this['clusterFlavor'] = clusterFlavor;
        return this;
    }
    public withType(type: string): PoolStatusClusters {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): PoolStatusClusters {
        this['version'] = version;
        return this;
    }
    public withPlugins(plugins: PoolStatusClustersPlugins): PoolStatusClusters {
        this['plugins'] = plugins;
        return this;
    }
}
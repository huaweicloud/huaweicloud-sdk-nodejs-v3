

export class ClusterAffinity {
    public clusterNames?: Array<string>;
    public exclude?: Array<string>;
    public constructor() { 
    }
    public withClusterNames(clusterNames: Array<string>): ClusterAffinity {
        this['clusterNames'] = clusterNames;
        return this;
    }
    public withExclude(exclude: Array<string>): ClusterAffinity {
        this['exclude'] = exclude;
        return this;
    }
}


export class ClusterInfo {
    public clusterID?: string;
    public clusterName?: string;
    public clusterPath?: string;
    public constructor() { 
    }
    public withClusterID(clusterID: string): ClusterInfo {
        this['clusterID'] = clusterID;
        return this;
    }
    public withClusterName(clusterName: string): ClusterInfo {
        this['clusterName'] = clusterName;
        return this;
    }
    public withClusterPath(clusterPath: string): ClusterInfo {
        this['clusterPath'] = clusterPath;
        return this;
    }
}
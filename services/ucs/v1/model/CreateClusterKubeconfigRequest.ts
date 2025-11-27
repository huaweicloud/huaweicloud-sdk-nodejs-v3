

export class CreateClusterKubeconfigRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): CreateClusterKubeconfigRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}
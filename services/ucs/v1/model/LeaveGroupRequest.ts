

export class LeaveGroupRequest {
    public clusterid?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): LeaveGroupRequest {
        this['clusterid'] = clusterid;
        return this;
    }
}
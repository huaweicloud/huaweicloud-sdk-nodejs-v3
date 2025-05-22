

export class ClusterTimezoneReq {
    private 'cluster_timezone'?: string;
    public constructor() { 
    }
    public withClusterTimezone(clusterTimezone: string): ClusterTimezoneReq {
        this['cluster_timezone'] = clusterTimezone;
        return this;
    }
    public set clusterTimezone(clusterTimezone: string  | undefined) {
        this['cluster_timezone'] = clusterTimezone;
    }
    public get clusterTimezone(): string | undefined {
        return this['cluster_timezone'];
    }
}
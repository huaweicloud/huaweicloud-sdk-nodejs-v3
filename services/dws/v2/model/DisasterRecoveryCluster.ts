

export class DisasterRecoveryCluster {
    public id?: string;
    public name?: string;
    private 'cluster_az'?: string;
    public role?: string;
    public region?: string;
    public status?: string;
    public progress?: string;
    private 'last_success_time'?: string;
    private 'obs_bucket_name'?: string;
    public constructor() { 
    }
    public withId(id: string): DisasterRecoveryCluster {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DisasterRecoveryCluster {
        this['name'] = name;
        return this;
    }
    public withClusterAz(clusterAz: string): DisasterRecoveryCluster {
        this['cluster_az'] = clusterAz;
        return this;
    }
    public set clusterAz(clusterAz: string  | undefined) {
        this['cluster_az'] = clusterAz;
    }
    public get clusterAz(): string | undefined {
        return this['cluster_az'];
    }
    public withRole(role: string): DisasterRecoveryCluster {
        this['role'] = role;
        return this;
    }
    public withRegion(region: string): DisasterRecoveryCluster {
        this['region'] = region;
        return this;
    }
    public withStatus(status: string): DisasterRecoveryCluster {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: string): DisasterRecoveryCluster {
        this['progress'] = progress;
        return this;
    }
    public withLastSuccessTime(lastSuccessTime: string): DisasterRecoveryCluster {
        this['last_success_time'] = lastSuccessTime;
        return this;
    }
    public set lastSuccessTime(lastSuccessTime: string  | undefined) {
        this['last_success_time'] = lastSuccessTime;
    }
    public get lastSuccessTime(): string | undefined {
        return this['last_success_time'];
    }
    public withObsBucketName(obsBucketName: string): DisasterRecoveryCluster {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
}
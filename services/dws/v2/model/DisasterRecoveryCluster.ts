

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
    private 'datastore_version'?: string;
    private 'datastore_type'?: string;
    private 'disk_capacity'?: string;
    private 'disk_used'?: string;
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
    public withDatastoreVersion(datastoreVersion: string): DisasterRecoveryCluster {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreType(datastoreType: string): DisasterRecoveryCluster {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withDiskCapacity(diskCapacity: string): DisasterRecoveryCluster {
        this['disk_capacity'] = diskCapacity;
        return this;
    }
    public set diskCapacity(diskCapacity: string  | undefined) {
        this['disk_capacity'] = diskCapacity;
    }
    public get diskCapacity(): string | undefined {
        return this['disk_capacity'];
    }
    public withDiskUsed(diskUsed: string): DisasterRecoveryCluster {
        this['disk_used'] = diskUsed;
        return this;
    }
    public set diskUsed(diskUsed: string  | undefined) {
        this['disk_used'] = diskUsed;
    }
    public get diskUsed(): string | undefined {
        return this['disk_used'];
    }
}
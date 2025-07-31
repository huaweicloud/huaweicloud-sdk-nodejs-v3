

export class MultiCloudClusterInfo {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public provider?: string;
    public server?: string;
    private 'image_repo'?: string;
    public status?: string;
    public version?: string;
    private 'current_expiration_date'?: number;
    private 'certificate_expiration_date'?: number;
    public constructor() { 
    }
    public withClusterId(clusterId: string): MultiCloudClusterInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): MultiCloudClusterInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withProvider(provider: string): MultiCloudClusterInfo {
        this['provider'] = provider;
        return this;
    }
    public withServer(server: string): MultiCloudClusterInfo {
        this['server'] = server;
        return this;
    }
    public withImageRepo(imageRepo: string): MultiCloudClusterInfo {
        this['image_repo'] = imageRepo;
        return this;
    }
    public set imageRepo(imageRepo: string  | undefined) {
        this['image_repo'] = imageRepo;
    }
    public get imageRepo(): string | undefined {
        return this['image_repo'];
    }
    public withStatus(status: string): MultiCloudClusterInfo {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): MultiCloudClusterInfo {
        this['version'] = version;
        return this;
    }
    public withCurrentExpirationDate(currentExpirationDate: number): MultiCloudClusterInfo {
        this['current_expiration_date'] = currentExpirationDate;
        return this;
    }
    public set currentExpirationDate(currentExpirationDate: number  | undefined) {
        this['current_expiration_date'] = currentExpirationDate;
    }
    public get currentExpirationDate(): number | undefined {
        return this['current_expiration_date'];
    }
    public withCertificateExpirationDate(certificateExpirationDate: number): MultiCloudClusterInfo {
        this['certificate_expiration_date'] = certificateExpirationDate;
        return this;
    }
    public set certificateExpirationDate(certificateExpirationDate: number  | undefined) {
        this['certificate_expiration_date'] = certificateExpirationDate;
    }
    public get certificateExpirationDate(): number | undefined {
        return this['certificate_expiration_date'];
    }
}
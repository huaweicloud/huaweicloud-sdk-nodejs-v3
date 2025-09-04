

export class CreateClusterInstallCmdRequest {
    private 'cluster_id'?: string;
    public arch?: string;
    public os?: string;
    public constructor(clusterId?: string, arch?: string) { 
        this['cluster_id'] = clusterId;
        this['arch'] = arch;
    }
    public withClusterId(clusterId: string): CreateClusterInstallCmdRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withArch(arch: string): CreateClusterInstallCmdRequest {
        this['arch'] = arch;
        return this;
    }
    public withOs(os: string): CreateClusterInstallCmdRequest {
        this['os'] = os;
        return this;
    }
}
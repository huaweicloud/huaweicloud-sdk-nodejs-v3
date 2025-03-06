

export class DeleteDwsClusterRequest {
    private 'cluster_id'?: string;
    private 'keep_last_manual_backup'?: string;
    private 'release_eip_type'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteDwsClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withKeepLastManualBackup(keepLastManualBackup: string): DeleteDwsClusterRequest {
        this['keep_last_manual_backup'] = keepLastManualBackup;
        return this;
    }
    public set keepLastManualBackup(keepLastManualBackup: string  | undefined) {
        this['keep_last_manual_backup'] = keepLastManualBackup;
    }
    public get keepLastManualBackup(): string | undefined {
        return this['keep_last_manual_backup'];
    }
    public withReleaseEipType(releaseEipType: string): DeleteDwsClusterRequest {
        this['release_eip_type'] = releaseEipType;
        return this;
    }
    public set releaseEipType(releaseEipType: string  | undefined) {
        this['release_eip_type'] = releaseEipType;
    }
    public get releaseEipType(): string | undefined {
        return this['release_eip_type'];
    }
}
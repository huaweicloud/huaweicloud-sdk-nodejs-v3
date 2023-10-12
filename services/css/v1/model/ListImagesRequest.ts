

export class ListImagesRequest {
    private 'cluster_id'?: string;
    private 'upgrade_type'?: string;
    public constructor(clusterId?: string, upgradeType?: string) { 
        this['cluster_id'] = clusterId;
        this['upgrade_type'] = upgradeType;
    }
    public withClusterId(clusterId: string): ListImagesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withUpgradeType(upgradeType: string): ListImagesRequest {
        this['upgrade_type'] = upgradeType;
        return this;
    }
    public set upgradeType(upgradeType: string  | undefined) {
        this['upgrade_type'] = upgradeType;
    }
    public get upgradeType(): string | undefined {
        return this['upgrade_type'];
    }
}
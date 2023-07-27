

export class RootVolume {
    public volumetype?: RootVolumeVolumetypeEnum | string;
    public size?: number;
    private 'cluster_id'?: string;
    private 'cluster_type'?: RootVolumeClusterTypeEnum | string;
    public constructor(volumetype?: string, size?: number) { 
        this['volumetype'] = volumetype;
        this['size'] = size;
    }
    public withVolumetype(volumetype: RootVolumeVolumetypeEnum | string): RootVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): RootVolume {
        this['size'] = size;
        return this;
    }
    public withClusterId(clusterId: string): RootVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: RootVolumeClusterTypeEnum | string): RootVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: RootVolumeClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): RootVolumeClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RootVolumeVolumetypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD'
}
/**
    * @export
    * @enum {string}
    */
export enum RootVolumeClusterTypeEnum {
    DSS = 'DSS'
}

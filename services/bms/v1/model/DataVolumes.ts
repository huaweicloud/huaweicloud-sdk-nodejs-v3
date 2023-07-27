

export class DataVolumes {
    public volumetype?: DataVolumesVolumetypeEnum | string;
    public size?: number;
    public shareable?: boolean;
    private 'cluster_id'?: string;
    private 'cluster_type'?: DataVolumesClusterTypeEnum | string;
    public constructor(volumetype?: string, size?: number) { 
        this['volumetype'] = volumetype;
        this['size'] = size;
    }
    public withVolumetype(volumetype: DataVolumesVolumetypeEnum | string): DataVolumes {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): DataVolumes {
        this['size'] = size;
        return this;
    }
    public withShareable(shareable: boolean): DataVolumes {
        this['shareable'] = shareable;
        return this;
    }
    public withClusterId(clusterId: string): DataVolumes {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: DataVolumesClusterTypeEnum | string): DataVolumes {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: DataVolumesClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): DataVolumesClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataVolumesVolumetypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD'
}
/**
    * @export
    * @enum {string}
    */
export enum DataVolumesClusterTypeEnum {
    DSS = 'DSS'
}

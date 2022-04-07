import { PostPaidServerRootVolumeExtendParam } from './PostPaidServerRootVolumeExtendParam';


export class PostPaidServerRootVolume {
    public volumetype: PostPaidServerRootVolumeVolumetypeEnum;
    public size?: number;
    private 'hw:passthrough'?: boolean | undefined;
    private 'cluster_type'?: PostPaidServerRootVolumeClusterTypeEnum | undefined;
    private 'cluster_id'?: string | undefined;
    public extendparam?: PostPaidServerRootVolumeExtendParam;
    public constructor(volumetype?: any) { 
        this['volumetype'] = volumetype;
    }
    public withVolumetype(volumetype: PostPaidServerRootVolumeVolumetypeEnum): PostPaidServerRootVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): PostPaidServerRootVolume {
        this['size'] = size;
        return this;
    }
    public withHwPassthrough(hwPassthrough: boolean): PostPaidServerRootVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withClusterType(clusterType: PostPaidServerRootVolumeClusterTypeEnum): PostPaidServerRootVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PostPaidServerRootVolumeClusterTypeEnum | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PostPaidServerRootVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withExtendparam(extendparam: PostPaidServerRootVolumeExtendParam): PostPaidServerRootVolume {
        this['extendparam'] = extendparam;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostPaidServerRootVolumeVolumetypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD',
    CO_P1 = 'co-p1',
    UH_L1 = 'uh-l1',
    ESSD = 'ESSD'
}
/**
    * @export
    * @enum {string}
    */
export enum PostPaidServerRootVolumeClusterTypeEnum {
    DSS = 'DSS'
}

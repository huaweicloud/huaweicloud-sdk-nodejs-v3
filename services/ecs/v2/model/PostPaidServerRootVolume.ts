import { PostPaidServerRootVolumeExtendParam } from './PostPaidServerRootVolumeExtendParam';
import { PostPaidServerRootVolumeMetadata } from './PostPaidServerRootVolumeMetadata';


export class PostPaidServerRootVolume {
    public volumetype?: PostPaidServerRootVolumeVolumetypeEnum | string;
    public size?: number;
    private 'hw:passthrough'?: boolean;
    private 'cluster_type'?: PostPaidServerRootVolumeClusterTypeEnum | string;
    private 'cluster_id'?: string;
    public extendparam?: PostPaidServerRootVolumeExtendParam;
    public metadata?: PostPaidServerRootVolumeMetadata;
    public constructor(volumetype?: string) { 
        this['volumetype'] = volumetype;
    }
    public withVolumetype(volumetype: PostPaidServerRootVolumeVolumetypeEnum | string): PostPaidServerRootVolume {
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
    public set hwPassthrough(hwPassthrough: boolean  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): boolean | undefined {
        return this['hw:passthrough'];
    }
    public withClusterType(clusterType: PostPaidServerRootVolumeClusterTypeEnum | string): PostPaidServerRootVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PostPaidServerRootVolumeClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): PostPaidServerRootVolumeClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PostPaidServerRootVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withExtendparam(extendparam: PostPaidServerRootVolumeExtendParam): PostPaidServerRootVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withMetadata(metadata: PostPaidServerRootVolumeMetadata): PostPaidServerRootVolume {
        this['metadata'] = metadata;
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

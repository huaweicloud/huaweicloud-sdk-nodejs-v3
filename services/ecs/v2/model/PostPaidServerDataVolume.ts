import { PostPaidServerDataVolumeExtendParam } from './PostPaidServerDataVolumeExtendParam';
import { PostPaidServerDataVolumeMetadata } from './PostPaidServerDataVolumeMetadata';


export class PostPaidServerDataVolume {
    public volumetype: PostPaidServerDataVolumeVolumetypeEnum;
    public size: number;
    public shareable?: boolean;
    public multiattach?: boolean;
    private 'hw:passthrough'?: boolean | undefined;
    public extendparam?: PostPaidServerDataVolumeExtendParam;
    private 'cluster_type'?: PostPaidServerDataVolumeClusterTypeEnum | undefined;
    private 'cluster_id'?: string | undefined;
    public metadata?: PostPaidServerDataVolumeMetadata;
    private 'data_image_id'?: string | undefined;
    public constructor(volumetype?: any, size?: any) { 
        this['volumetype'] = volumetype;
        this['size'] = size;
    }
    public withVolumetype(volumetype: PostPaidServerDataVolumeVolumetypeEnum): PostPaidServerDataVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): PostPaidServerDataVolume {
        this['size'] = size;
        return this;
    }
    public withShareable(shareable: boolean): PostPaidServerDataVolume {
        this['shareable'] = shareable;
        return this;
    }
    public withMultiattach(multiattach: boolean): PostPaidServerDataVolume {
        this['multiattach'] = multiattach;
        return this;
    }
    public withHwPassthrough(hwPassthrough: boolean): PostPaidServerDataVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withExtendparam(extendparam: PostPaidServerDataVolumeExtendParam): PostPaidServerDataVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withClusterType(clusterType: PostPaidServerDataVolumeClusterTypeEnum): PostPaidServerDataVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PostPaidServerDataVolumeClusterTypeEnum | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PostPaidServerDataVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withMetadata(metadata: PostPaidServerDataVolumeMetadata): PostPaidServerDataVolume {
        this['metadata'] = metadata;
        return this;
    }
    public withDataImageId(dataImageId: string): PostPaidServerDataVolume {
        this['data_image_id'] = dataImageId;
        return this;
    }
    public set dataImageId(dataImageId: string | undefined) {
        this['data_image_id'] = dataImageId;
    }
    public get dataImageId() {
        return this['data_image_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostPaidServerDataVolumeVolumetypeEnum {
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
export enum PostPaidServerDataVolumeClusterTypeEnum {
    DSS = 'DSS'
}

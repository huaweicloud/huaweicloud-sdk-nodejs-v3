import { PostPaidServerDataVolumeExtendParam } from './PostPaidServerDataVolumeExtendParam';
import { PostPaidServerDataVolumeMetadata } from './PostPaidServerDataVolumeMetadata';


export class PostPaidServerDataVolume {
    public volumetype?: PostPaidServerDataVolumeVolumetypeEnum | string;
    public size?: number;
    public shareable?: boolean;
    public multiattach?: boolean;
    private 'hw:passthrough'?: boolean;
    public extendparam?: PostPaidServerDataVolumeExtendParam;
    private 'cluster_type'?: PostPaidServerDataVolumeClusterTypeEnum | string;
    private 'cluster_id'?: string;
    public metadata?: PostPaidServerDataVolumeMetadata;
    private 'data_image_id'?: string;
    private 'delete_on_termination'?: boolean;
    public constructor(volumetype?: string, size?: number) { 
        this['volumetype'] = volumetype;
        this['size'] = size;
    }
    public withVolumetype(volumetype: PostPaidServerDataVolumeVolumetypeEnum | string): PostPaidServerDataVolume {
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
    public set hwPassthrough(hwPassthrough: boolean  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): boolean | undefined {
        return this['hw:passthrough'];
    }
    public withExtendparam(extendparam: PostPaidServerDataVolumeExtendParam): PostPaidServerDataVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withClusterType(clusterType: PostPaidServerDataVolumeClusterTypeEnum | string): PostPaidServerDataVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PostPaidServerDataVolumeClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): PostPaidServerDataVolumeClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PostPaidServerDataVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
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
    public set dataImageId(dataImageId: string  | undefined) {
        this['data_image_id'] = dataImageId;
    }
    public get dataImageId(): string | undefined {
        return this['data_image_id'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): PostPaidServerDataVolume {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
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

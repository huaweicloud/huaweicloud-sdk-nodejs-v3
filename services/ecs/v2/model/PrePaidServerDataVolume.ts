import { PrePaidServerDataVolumeExtendParam } from './PrePaidServerDataVolumeExtendParam';
import { PrePaidServerDataVolumeMetadata } from './PrePaidServerDataVolumeMetadata';


export class PrePaidServerDataVolume {
    public volumetype?: PrePaidServerDataVolumeVolumetypeEnum | string;
    public size?: number;
    public iops?: number;
    public throughput?: number;
    public shareable?: boolean;
    public multiattach?: boolean;
    private 'hw:passthrough'?: boolean;
    public extendparam?: PrePaidServerDataVolumeExtendParam;
    private 'cluster_type'?: PrePaidServerDataVolumeClusterTypeEnum | string;
    private 'cluster_id'?: string;
    public metadata?: PrePaidServerDataVolumeMetadata;
    private 'data_image_id'?: string;
    private 'delete_on_termination'?: boolean;
    public constructor(volumetype?: string, size?: number) { 
        this['volumetype'] = volumetype;
        this['size'] = size;
    }
    public withVolumetype(volumetype: PrePaidServerDataVolumeVolumetypeEnum | string): PrePaidServerDataVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): PrePaidServerDataVolume {
        this['size'] = size;
        return this;
    }
    public withIops(iops: number): PrePaidServerDataVolume {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): PrePaidServerDataVolume {
        this['throughput'] = throughput;
        return this;
    }
    public withShareable(shareable: boolean): PrePaidServerDataVolume {
        this['shareable'] = shareable;
        return this;
    }
    public withMultiattach(multiattach: boolean): PrePaidServerDataVolume {
        this['multiattach'] = multiattach;
        return this;
    }
    public withHwPassthrough(hwPassthrough: boolean): PrePaidServerDataVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): boolean | undefined {
        return this['hw:passthrough'];
    }
    public withExtendparam(extendparam: PrePaidServerDataVolumeExtendParam): PrePaidServerDataVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withClusterType(clusterType: PrePaidServerDataVolumeClusterTypeEnum | string): PrePaidServerDataVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PrePaidServerDataVolumeClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): PrePaidServerDataVolumeClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PrePaidServerDataVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withMetadata(metadata: PrePaidServerDataVolumeMetadata): PrePaidServerDataVolume {
        this['metadata'] = metadata;
        return this;
    }
    public withDataImageId(dataImageId: string): PrePaidServerDataVolume {
        this['data_image_id'] = dataImageId;
        return this;
    }
    public set dataImageId(dataImageId: string  | undefined) {
        this['data_image_id'] = dataImageId;
    }
    public get dataImageId(): string | undefined {
        return this['data_image_id'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): PrePaidServerDataVolume {
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
export enum PrePaidServerDataVolumeVolumetypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD',
    CO_P1 = 'co-p1',
    UH_L1 = 'uh-l1',
    ESSD = 'ESSD',
    GPSSD2 = 'GPSSD2',
    ESSD2 = 'ESSD2'
}
/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerDataVolumeClusterTypeEnum {
    DSS = 'DSS'
}

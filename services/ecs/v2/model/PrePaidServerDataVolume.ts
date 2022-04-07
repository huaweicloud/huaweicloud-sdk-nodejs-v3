import { PrePaidServerDataVolumeExtendParam } from './PrePaidServerDataVolumeExtendParam';
import { PrePaidServerDataVolumeMetadata } from './PrePaidServerDataVolumeMetadata';


export class PrePaidServerDataVolume {
    public volumetype: PrePaidServerDataVolumeVolumetypeEnum;
    public size: number;
    public shareable?: boolean;
    public multiattach?: boolean;
    private 'hw:passthrough'?: boolean | undefined;
    public extendparam?: PrePaidServerDataVolumeExtendParam;
    private 'cluster_type'?: PrePaidServerDataVolumeClusterTypeEnum | undefined;
    private 'cluster_id'?: string | undefined;
    public metadata?: PrePaidServerDataVolumeMetadata;
    private 'data_image_id'?: string | undefined;
    public constructor(volumetype?: any, size?: any) { 
        this['volumetype'] = volumetype;
        this['size'] = size;
    }
    public withVolumetype(volumetype: PrePaidServerDataVolumeVolumetypeEnum): PrePaidServerDataVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): PrePaidServerDataVolume {
        this['size'] = size;
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
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withExtendparam(extendparam: PrePaidServerDataVolumeExtendParam): PrePaidServerDataVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withClusterType(clusterType: PrePaidServerDataVolumeClusterTypeEnum): PrePaidServerDataVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PrePaidServerDataVolumeClusterTypeEnum | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PrePaidServerDataVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
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
export enum PrePaidServerDataVolumeVolumetypeEnum {
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
export enum PrePaidServerDataVolumeClusterTypeEnum {
    DSS = 'DSS'
}

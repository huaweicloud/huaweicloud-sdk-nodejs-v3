import { PrePaidServerRootVolumeExtendParam } from './PrePaidServerRootVolumeExtendParam';


export class PrePaidServerRootVolume {
    public volumetype: PrePaidServerRootVolumeVolumetypeEnum;
    public size?: number;
    public extendparam?: PrePaidServerRootVolumeExtendParam;
    private 'cluster_type'?: PrePaidServerRootVolumeClusterTypeEnum | undefined;
    private 'cluster_id'?: string | undefined;
    private 'hw:passthrough'?: boolean | undefined;
    public constructor(volumetype?: any) { 
        this['volumetype'] = volumetype;
    }
    public withVolumetype(volumetype: PrePaidServerRootVolumeVolumetypeEnum): PrePaidServerRootVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): PrePaidServerRootVolume {
        this['size'] = size;
        return this;
    }
    public withExtendparam(extendparam: PrePaidServerRootVolumeExtendParam): PrePaidServerRootVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withClusterType(clusterType: PrePaidServerRootVolumeClusterTypeEnum): PrePaidServerRootVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PrePaidServerRootVolumeClusterTypeEnum | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PrePaidServerRootVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withHwPassthrough(hwPassthrough: boolean): PrePaidServerRootVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerRootVolumeVolumetypeEnum {
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
export enum PrePaidServerRootVolumeClusterTypeEnum {
    DSS = 'DSS'
}

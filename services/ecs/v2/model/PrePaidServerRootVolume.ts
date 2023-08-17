import { PrePaidServerRootVolumeExtendParam } from './PrePaidServerRootVolumeExtendParam';
import { PrePaidServerRootVolumeMetadata } from './PrePaidServerRootVolumeMetadata';


export class PrePaidServerRootVolume {
    public volumetype?: PrePaidServerRootVolumeVolumetypeEnum | string;
    public size?: number;
    public iops?: number;
    public throughput?: number;
    public extendparam?: PrePaidServerRootVolumeExtendParam;
    public metadata?: PrePaidServerRootVolumeMetadata;
    private 'cluster_type'?: PrePaidServerRootVolumeClusterTypeEnum | string;
    private 'cluster_id'?: string;
    private 'hw:passthrough'?: boolean;
    public constructor(volumetype?: string) { 
        this['volumetype'] = volumetype;
    }
    public withVolumetype(volumetype: PrePaidServerRootVolumeVolumetypeEnum | string): PrePaidServerRootVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withSize(size: number): PrePaidServerRootVolume {
        this['size'] = size;
        return this;
    }
    public withIops(iops: number): PrePaidServerRootVolume {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): PrePaidServerRootVolume {
        this['throughput'] = throughput;
        return this;
    }
    public withExtendparam(extendparam: PrePaidServerRootVolumeExtendParam): PrePaidServerRootVolume {
        this['extendparam'] = extendparam;
        return this;
    }
    public withMetadata(metadata: PrePaidServerRootVolumeMetadata): PrePaidServerRootVolume {
        this['metadata'] = metadata;
        return this;
    }
    public withClusterType(clusterType: PrePaidServerRootVolumeClusterTypeEnum | string): PrePaidServerRootVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PrePaidServerRootVolumeClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): PrePaidServerRootVolumeClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PrePaidServerRootVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withHwPassthrough(hwPassthrough: boolean): PrePaidServerRootVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): boolean | undefined {
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
    ESSD = 'ESSD',
    GPSSD2 = 'GPSSD2',
    ESSD2 = 'ESSD2'
}
/**
    * @export
    * @enum {string}
    */
export enum PrePaidServerRootVolumeClusterTypeEnum {
    DSS = 'DSS'
}

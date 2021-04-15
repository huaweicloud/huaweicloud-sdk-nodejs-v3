import { DataVolumeMetadata } from './DataVolumeMetadata';
import { V3RootVolume } from './V3RootVolume';


export class V3DataVolume {
    private 'cluster_id'?: string | undefined;
    private 'cluster_type'?: string | undefined;
    public extendParam?: { [key: string]: object; };
    private 'hw:passthrough'?: boolean | undefined;
    public size: number;
    public volumetype: string;
    public metadata?: DataVolumeMetadata;
    public constructor(size?: any, volumetype?: any) { 
        this['size'] = size;
        this['volumetype'] = volumetype;
    }
    public withClusterId(clusterId: string): V3DataVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): V3DataVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withExtendParam(extendParam: { [key: string]: object; }): V3DataVolume {
        this['extendParam'] = extendParam;
        return this;
    }
    public withHwPassthrough(hwPassthrough: boolean): V3DataVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withSize(size: number): V3DataVolume {
        this['size'] = size;
        return this;
    }
    public withVolumetype(volumetype: string): V3DataVolume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withMetadata(metadata: DataVolumeMetadata): V3DataVolume {
        this['metadata'] = metadata;
        return this;
    }
}
import { VolumeMetadata } from './VolumeMetadata';


export class Volume {
    public size: number;
    public volumetype: string;
    public extendParam?: { [key: string]: object; };
    private 'cluster_id'?: string | undefined;
    private 'cluster_type'?: string | undefined;
    private 'hw:passthrough'?: boolean | undefined;
    public metadata?: VolumeMetadata;
    public constructor(size?: any, volumetype?: any) { 
        this['size'] = size;
        this['volumetype'] = volumetype;
    }
    public withSize(size: number): Volume {
        this['size'] = size;
        return this;
    }
    public withVolumetype(volumetype: string): Volume {
        this['volumetype'] = volumetype;
        return this;
    }
    public withExtendParam(extendParam: { [key: string]: object; }): Volume {
        this['extendParam'] = extendParam;
        return this;
    }
    public withClusterId(clusterId: string): Volume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): Volume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withHwPassthrough(hwPassthrough: boolean): Volume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withMetadata(metadata: VolumeMetadata): Volume {
        this['metadata'] = metadata;
        return this;
    }
}
import { VolumeMetadata } from './VolumeMetadata';


export class Volume {
    public size?: number;
    public volumetype?: string;
    public iops?: number;
    public throughput?: number;
    public extendParam?: { [key: string]: object; };
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    private 'hw:passthrough'?: boolean;
    public metadata?: VolumeMetadata;
    public constructor(size?: number, volumetype?: string) { 
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
    public withIops(iops: number): Volume {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): Volume {
        this['throughput'] = throughput;
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
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): Volume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withHwPassthrough(hwPassthrough: boolean): Volume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): boolean | undefined {
        return this['hw:passthrough'];
    }
    public withMetadata(metadata: VolumeMetadata): Volume {
        this['metadata'] = metadata;
        return this;
    }
}


export class V3RootVolume {
    private 'cluster_id'?: string | undefined;
    private 'cluster_type'?: string | undefined;
    public extendParam?: { [key: string]: object; };
    private 'hw:passthrough'?: boolean | undefined;
    public size: number;
    public volumetype: string;
    public constructor(size?: any, volumetype?: any) { 
        this['size'] = size;
        this['volumetype'] = volumetype;
    }
    public withClusterId(clusterId: string): V3RootVolume {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): V3RootVolume {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withExtendParam(extendParam: { [key: string]: object; }): V3RootVolume {
        this['extendParam'] = extendParam;
        return this;
    }
    public withHwPassthrough(hwPassthrough: boolean): V3RootVolume {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: boolean | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withSize(size: number): V3RootVolume {
        this['size'] = size;
        return this;
    }
    public withVolumetype(volumetype: string): V3RootVolume {
        this['volumetype'] = volumetype;
        return this;
    }
}
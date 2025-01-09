

export class VolumeAddInfo {
    public id?: string;
    public type?: string;
    public size?: number;
    private 'cluster_id'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withId(id: string): VolumeAddInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): VolumeAddInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeAddInfo {
        this['size'] = size;
        return this;
    }
    public withClusterId(clusterId: string): VolumeAddInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}
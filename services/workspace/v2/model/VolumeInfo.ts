

export class VolumeInfo {
    public id?: string;
    public type?: string;
    public size?: number;
    private 'cluster_id'?: string;
    private 'resource_spec_code'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withId(id: string): VolumeInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): VolumeInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeInfo {
        this['size'] = size;
        return this;
    }
    public withClusterId(clusterId: string): VolumeInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): VolumeInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}
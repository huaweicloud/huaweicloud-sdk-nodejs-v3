import { VolumeType } from './VolumeType';


export class Volume {
    public type?: VolumeType;
    public size?: number;
    private 'cluster_id'?: string;
    public constructor(type?: VolumeType, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: VolumeType): Volume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Volume {
        this['size'] = size;
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
}
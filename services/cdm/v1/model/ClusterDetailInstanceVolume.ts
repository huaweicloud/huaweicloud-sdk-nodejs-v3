

export class ClusterDetailInstanceVolume {
    public type?: string;
    public size?: number;
    public constructor() { 
    }
    public withType(type: string): ClusterDetailInstanceVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): ClusterDetailInstanceVolume {
        this['size'] = size;
        return this;
    }
}
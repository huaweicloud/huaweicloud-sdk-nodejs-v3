

export class Volume {
    public volume?: string;
    public capacity?: number;
    public iops?: number;
    public constructor(volume?: string) { 
        this['volume'] = volume;
    }
    public withVolume(volume: string): Volume {
        this['volume'] = volume;
        return this;
    }
    public withCapacity(capacity: number): Volume {
        this['capacity'] = capacity;
        return this;
    }
    public withIops(iops: number): Volume {
        this['iops'] = iops;
        return this;
    }
}


export class Volume {
    public volume?: string;
    public capacity?: number;
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
}
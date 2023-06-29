

export class Crop {
    public duration?: number;
    public constructor() { 
    }
    public withDuration(duration: number): Crop {
        this['duration'] = duration;
        return this;
    }
}
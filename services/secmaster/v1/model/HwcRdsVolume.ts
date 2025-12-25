

export class HwcRdsVolume {
    public type?: string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): HwcRdsVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): HwcRdsVolume {
        this['size'] = size;
        return this;
    }
}
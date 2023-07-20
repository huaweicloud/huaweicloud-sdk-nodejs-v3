

export class ListVolume {
    public type?: string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): ListVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): ListVolume {
        this['size'] = size;
        return this;
    }
}
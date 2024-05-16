

export class StarRocksInstanceInfoVolume {
    public type?: string;
    public size?: string;
    public constructor() { 
    }
    public withType(type: string): StarRocksInstanceInfoVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): StarRocksInstanceInfoVolume {
        this['size'] = size;
        return this;
    }
}


export class MysqlVolume {
    public size?: string;
    public type?: string;
    public constructor() { 
    }
    public withSize(size: string): MysqlVolume {
        this['size'] = size;
        return this;
    }
    public withType(type: string): MysqlVolume {
        this['type'] = type;
        return this;
    }
}
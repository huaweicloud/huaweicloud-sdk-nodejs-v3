

export class MysqlVolume {
    public size?: string;
    public constructor(size?: string) { 
        this['size'] = size;
    }
    public withSize(size: string): MysqlVolume {
        this['size'] = size;
        return this;
    }
}
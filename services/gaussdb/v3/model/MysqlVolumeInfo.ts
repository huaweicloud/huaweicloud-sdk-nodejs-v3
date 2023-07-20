

export class MysqlVolumeInfo {
    public type?: string;
    public size?: string;
    public constructor(type?: string, size?: string) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): MysqlVolumeInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): MysqlVolumeInfo {
        this['size'] = size;
        return this;
    }
}
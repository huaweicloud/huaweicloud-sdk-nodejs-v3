

export class MysqlInstanceNodeVolumeInfo {
    public type?: string;
    public used?: string;
    public size?: number;
    public constructor(type?: string, used?: string, size?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['size'] = size;
    }
    public withType(type: string): MysqlInstanceNodeVolumeInfo {
        this['type'] = type;
        return this;
    }
    public withUsed(used: string): MysqlInstanceNodeVolumeInfo {
        this['used'] = used;
        return this;
    }
    public withSize(size: number): MysqlInstanceNodeVolumeInfo {
        this['size'] = size;
        return this;
    }
}
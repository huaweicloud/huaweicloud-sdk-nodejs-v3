

export class MysqlVolumeResp {
    public size?: string;
    public constructor(size?: string) { 
        this['size'] = size;
    }
    public withSize(size: string): MysqlVolumeResp {
        this['size'] = size;
        return this;
    }
}
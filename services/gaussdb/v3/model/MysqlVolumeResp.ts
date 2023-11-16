

export class MysqlVolumeResp {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): MysqlVolumeResp {
        this['size'] = size;
        return this;
    }
}
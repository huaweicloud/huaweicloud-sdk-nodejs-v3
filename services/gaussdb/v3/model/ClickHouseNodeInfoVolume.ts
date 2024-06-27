

export class ClickHouseNodeInfoVolume {
    public type?: string;
    public size?: string;
    public used?: string;
    public iops?: number;
    public constructor(type?: string, size?: string) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): ClickHouseNodeInfoVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): ClickHouseNodeInfoVolume {
        this['size'] = size;
        return this;
    }
    public withUsed(used: string): ClickHouseNodeInfoVolume {
        this['used'] = used;
        return this;
    }
    public withIops(iops: number): ClickHouseNodeInfoVolume {
        this['iops'] = iops;
        return this;
    }
}


export class StarRocksCreateRequestBeVolume {
    private 'io_type'?: string;
    private 'capacity_in_gb'?: number;
    public constructor(ioType?: string, capacityInGb?: number) { 
        this['io_type'] = ioType;
        this['capacity_in_gb'] = capacityInGb;
    }
    public withIoType(ioType: string): StarRocksCreateRequestBeVolume {
        this['io_type'] = ioType;
        return this;
    }
    public set ioType(ioType: string  | undefined) {
        this['io_type'] = ioType;
    }
    public get ioType(): string | undefined {
        return this['io_type'];
    }
    public withCapacityInGb(capacityInGb: number): StarRocksCreateRequestBeVolume {
        this['capacity_in_gb'] = capacityInGb;
        return this;
    }
    public set capacityInGb(capacityInGb: number  | undefined) {
        this['capacity_in_gb'] = capacityInGb;
    }
    public get capacityInGb(): number | undefined {
        return this['capacity_in_gb'];
    }
}
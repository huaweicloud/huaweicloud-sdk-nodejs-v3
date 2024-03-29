

export class ListProductsRespIo {
    private 'io_type'?: string;
    private 'storage_spec_code'?: string;
    private 'available_zones'?: Array<string>;
    private 'unavailable_zones'?: Array<string>;
    private 'volume_type'?: string;
    public constructor() { 
    }
    public withIoType(ioType: string): ListProductsRespIo {
        this['io_type'] = ioType;
        return this;
    }
    public set ioType(ioType: string  | undefined) {
        this['io_type'] = ioType;
    }
    public get ioType(): string | undefined {
        return this['io_type'];
    }
    public withStorageSpecCode(storageSpecCode: string): ListProductsRespIo {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: string  | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode(): string | undefined {
        return this['storage_spec_code'];
    }
    public withAvailableZones(availableZones: Array<string>): ListProductsRespIo {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): ListProductsRespIo {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
    public withVolumeType(volumeType: string): ListProductsRespIo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
}
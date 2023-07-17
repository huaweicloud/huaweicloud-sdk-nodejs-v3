

export class ExtendProductIosEntity {
    private 'io_spec'?: string | undefined;
    private 'available_zones'?: Array<string> | undefined;
    public type?: string;
    private 'unavailable_zones'?: Array<string> | undefined;
    public constructor() { 
    }
    public withIoSpec(ioSpec: string): ExtendProductIosEntity {
        this['io_spec'] = ioSpec;
        return this;
    }
    public set ioSpec(ioSpec: string | undefined) {
        this['io_spec'] = ioSpec;
    }
    public get ioSpec() {
        return this['io_spec'];
    }
    public withAvailableZones(availableZones: Array<string>): ExtendProductIosEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withType(type: string): ExtendProductIosEntity {
        this['type'] = type;
        return this;
    }
    public withUnavailableZones(unavailableZones: Array<string>): ExtendProductIosEntity {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string> | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones() {
        return this['unavailable_zones'];
    }
}
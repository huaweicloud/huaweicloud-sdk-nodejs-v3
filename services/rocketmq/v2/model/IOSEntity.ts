

export class IOSEntity {
    private 'available_zones'?: Array<string>;
    private 'unavailable_zones'?: Array<string>;
    private 'io_spec'?: string;
    public type?: string;
    public constructor() { 
    }
    public withAvailableZones(availableZones: Array<string>): IOSEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): IOSEntity {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
    public withIoSpec(ioSpec: string): IOSEntity {
        this['io_spec'] = ioSpec;
        return this;
    }
    public set ioSpec(ioSpec: string  | undefined) {
        this['io_spec'] = ioSpec;
    }
    public get ioSpec(): string | undefined {
        return this['io_spec'];
    }
    public withType(type: string): IOSEntity {
        this['type'] = type;
        return this;
    }
}


export class RabbitMQExtendProductIosEntity {
    private 'io_spec'?: string | undefined;
    private 'available_zones'?: Array<string> | undefined;
    public type?: string;
    private 'unavailable_zones'?: Array<string> | undefined;
    public constructor() { 
    }
    public withIoSpec(ioSpec: string): RabbitMQExtendProductIosEntity {
        this['io_spec'] = ioSpec;
        return this;
    }
    public set ioSpec(ioSpec: string | undefined) {
        this['io_spec'] = ioSpec;
    }
    public get ioSpec() {
        return this['io_spec'];
    }
    public withAvailableZones(availableZones: Array<string>): RabbitMQExtendProductIosEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withType(type: string): RabbitMQExtendProductIosEntity {
        this['type'] = type;
        return this;
    }
    public withUnavailableZones(unavailableZones: Array<string>): RabbitMQExtendProductIosEntity {
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
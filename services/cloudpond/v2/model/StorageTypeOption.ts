

export class StorageTypeOption {
    public id?: string;
    public name?: string;
    private 'zone_code'?: string;
    private 'expand_capacity_step'?: number;
    private 'supported_capacities'?: Array<number>;
    public constructor() { 
    }
    public withId(id: string): StorageTypeOption {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StorageTypeOption {
        this['name'] = name;
        return this;
    }
    public withZoneCode(zoneCode: string): StorageTypeOption {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withExpandCapacityStep(expandCapacityStep: number): StorageTypeOption {
        this['expand_capacity_step'] = expandCapacityStep;
        return this;
    }
    public set expandCapacityStep(expandCapacityStep: number  | undefined) {
        this['expand_capacity_step'] = expandCapacityStep;
    }
    public get expandCapacityStep(): number | undefined {
        return this['expand_capacity_step'];
    }
    public withSupportedCapacities(supportedCapacities: Array<number>): StorageTypeOption {
        this['supported_capacities'] = supportedCapacities;
        return this;
    }
    public set supportedCapacities(supportedCapacities: Array<number>  | undefined) {
        this['supported_capacities'] = supportedCapacities;
    }
    public get supportedCapacities(): Array<number> | undefined {
        return this['supported_capacities'];
    }
}


export class UpdateAddressGroupOption {
    public name?: string;
    public description?: string;
    private 'ip_set'?: Array<string> | undefined;
    private 'max_capacity'?: number | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateAddressGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAddressGroupOption {
        this['description'] = description;
        return this;
    }
    public withIpSet(ipSet: Array<string>): UpdateAddressGroupOption {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string> | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet() {
        return this['ip_set'];
    }
    public withMaxCapacity(maxCapacity: number): UpdateAddressGroupOption {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity() {
        return this['max_capacity'];
    }
}
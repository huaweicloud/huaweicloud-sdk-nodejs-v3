

export class Flavor {
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'availability_zone'?: Array<string>;
    private 'az_status'?: { [key: string]: string; };
    public version?: string;
    public name?: string;
    private 'group_type'?: string;
    public constructor(vcpus?: string, ram?: string, specCode?: string, availabilityZone?: Array<string>, azStatus?: { [key: string]: string; }, version?: string, name?: string, groupType?: string) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['availability_zone'] = availabilityZone;
        this['az_status'] = azStatus;
        this['version'] = version;
        this['name'] = name;
        this['group_type'] = groupType;
    }
    public withVcpus(vcpus: string): Flavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): Flavor {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): Flavor {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAvailabilityZone(availabilityZone: Array<string>): Flavor {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): Flavor {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withVersion(version: string): Flavor {
        this['version'] = version;
        return this;
    }
    public withName(name: string): Flavor {
        this['name'] = name;
        return this;
    }
    public withGroupType(groupType: string): Flavor {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
}
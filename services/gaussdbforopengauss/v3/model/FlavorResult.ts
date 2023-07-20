

export class FlavorResult {
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'az_status'?: { [key: string]: string; };
    private 'availability_zone'?: Array<string>;
    public version?: string;
    public name?: string;
    private 'group_type'?: string;
    public constructor(vcpus?: string, ram?: string, specCode?: string, azStatus?: { [key: string]: string; }, availabilityZone?: Array<string>, version?: string, name?: string, groupType?: string) { 
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['az_status'] = azStatus;
        this['availability_zone'] = availabilityZone;
        this['version'] = version;
        this['name'] = name;
        this['group_type'] = groupType;
    }
    public withVcpus(vcpus: string): FlavorResult {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): FlavorResult {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): FlavorResult {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): FlavorResult {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withAvailabilityZone(availabilityZone: Array<string>): FlavorResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
    public withVersion(version: string): FlavorResult {
        this['version'] = version;
        return this;
    }
    public withName(name: string): FlavorResult {
        this['name'] = name;
        return this;
    }
    public withGroupType(groupType: string): FlavorResult {
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
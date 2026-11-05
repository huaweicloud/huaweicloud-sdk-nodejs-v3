import { SupabaseSpecFlavorInfoAvailabilityZones } from './SupabaseSpecFlavorInfoAvailabilityZones';


export class SupabaseSpecFlavorInfo {
    public id?: string;
    public mode?: string;
    public version?: string;
    public vcpus?: number;
    public ram?: number;
    private 'spec_code'?: string;
    private 'group_type'?: string;
    private 'availability_zones'?: Array<SupabaseSpecFlavorInfoAvailabilityZones>;
    public constructor() { 
    }
    public withId(id: string): SupabaseSpecFlavorInfo {
        this['id'] = id;
        return this;
    }
    public withMode(mode: string): SupabaseSpecFlavorInfo {
        this['mode'] = mode;
        return this;
    }
    public withVersion(version: string): SupabaseSpecFlavorInfo {
        this['version'] = version;
        return this;
    }
    public withVcpus(vcpus: number): SupabaseSpecFlavorInfo {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): SupabaseSpecFlavorInfo {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): SupabaseSpecFlavorInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withGroupType(groupType: string): SupabaseSpecFlavorInfo {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withAvailabilityZones(availabilityZones: Array<SupabaseSpecFlavorInfoAvailabilityZones>): SupabaseSpecFlavorInfo {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<SupabaseSpecFlavorInfoAvailabilityZones>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<SupabaseSpecFlavorInfoAvailabilityZones> | undefined {
        return this['availability_zones'];
    }
}
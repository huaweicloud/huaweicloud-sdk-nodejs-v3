

export class ListFlavorsResult {
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'availability_zone'?: Array<string>;
    private 'az_status'?: object;
    public constructor(engineName?: string, engineVersion?: string, vcpus?: string, ram?: string, specCode?: string, availabilityZone?: Array<string>, azStatus?: object) { 
        this['engine_name'] = engineName;
        this['engine_version'] = engineVersion;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['availability_zone'] = availabilityZone;
        this['az_status'] = azStatus;
    }
    public withEngineName(engineName: string): ListFlavorsResult {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): ListFlavorsResult {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withVcpus(vcpus: string): ListFlavorsResult {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ListFlavorsResult {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): ListFlavorsResult {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAvailabilityZone(availabilityZone: Array<string>): ListFlavorsResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: Array<string>  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): Array<string> | undefined {
        return this['availability_zone'];
    }
    public withAzStatus(azStatus: object): ListFlavorsResult {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: object  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): object | undefined {
        return this['az_status'];
    }
}
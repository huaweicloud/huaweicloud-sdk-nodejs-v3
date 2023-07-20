

export class Flavor {
    private 'engine_name'?: string;
    public type?: string;
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'az_status'?: object;
    public constructor(engineName?: string, type?: string, vcpus?: string, ram?: string, specCode?: string, azStatus?: object) { 
        this['engine_name'] = engineName;
        this['type'] = type;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['az_status'] = azStatus;
    }
    public withEngineName(engineName: string): Flavor {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withType(type: string): Flavor {
        this['type'] = type;
        return this;
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
    public withAzStatus(azStatus: object): Flavor {
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
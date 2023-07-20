

export class FlavorInfo {
    private 'engine_name'?: string;
    public type?: string;
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'az_status'?: object;
    private 'engine_versions'?: Array<string>;
    public constructor(engineName?: string, type?: string, vcpus?: string, ram?: string, specCode?: string, azStatus?: object, engineVersions?: Array<string>) { 
        this['engine_name'] = engineName;
        this['type'] = type;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['spec_code'] = specCode;
        this['az_status'] = azStatus;
        this['engine_versions'] = engineVersions;
    }
    public withEngineName(engineName: string): FlavorInfo {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withType(type: string): FlavorInfo {
        this['type'] = type;
        return this;
    }
    public withVcpus(vcpus: string): FlavorInfo {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): FlavorInfo {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): FlavorInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAzStatus(azStatus: object): FlavorInfo {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: object  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): object | undefined {
        return this['az_status'];
    }
    public withEngineVersions(engineVersions: Array<string>): FlavorInfo {
        this['engine_versions'] = engineVersions;
        return this;
    }
    public set engineVersions(engineVersions: Array<string>  | undefined) {
        this['engine_versions'] = engineVersions;
    }
    public get engineVersions(): Array<string> | undefined {
        return this['engine_versions'];
    }
}
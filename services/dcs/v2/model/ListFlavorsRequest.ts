

export class ListFlavorsRequest {
    private 'instance_id'?: string | undefined;
    private 'spec_code'?: string | undefined;
    private 'cache_mode'?: string | undefined;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    private 'cpu_type'?: ListFlavorsRequestCpuTypeEnum | undefined;
    public capacity?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListFlavorsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withSpecCode(specCode: string): ListFlavorsRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withCacheMode(cacheMode: string): ListFlavorsRequest {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode() {
        return this['cache_mode'];
    }
    public withEngine(engine: string): ListFlavorsRequest {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ListFlavorsRequest {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withCpuType(cpuType: ListFlavorsRequestCpuTypeEnum): ListFlavorsRequest {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: ListFlavorsRequestCpuTypeEnum | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType() {
        return this['cpu_type'];
    }
    public withCapacity(capacity: string): ListFlavorsRequest {
        this['capacity'] = capacity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlavorsRequestCpuTypeEnum {
    X86_64 = 'x86_64',
    AARCH64 = 'aarch64'
}



export class MysqlEngineVersionInfo {
    public id?: string;
    public name?: string;
    public version?: string;
    private 'kernel_version'?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): MysqlEngineVersionInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MysqlEngineVersionInfo {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): MysqlEngineVersionInfo {
        this['version'] = version;
        return this;
    }
    public withKernelVersion(kernelVersion: string): MysqlEngineVersionInfo {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
}
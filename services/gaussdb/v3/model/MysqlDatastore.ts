

export class MysqlDatastore {
    public type?: string;
    public version?: string;
    private 'kernel_version'?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): MysqlDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): MysqlDatastore {
        this['version'] = version;
        return this;
    }
    public withKernelVersion(kernelVersion: string): MysqlDatastore {
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
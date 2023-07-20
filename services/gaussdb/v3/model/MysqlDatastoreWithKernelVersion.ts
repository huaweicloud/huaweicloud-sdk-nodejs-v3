

export class MysqlDatastoreWithKernelVersion {
    public type?: string;
    public version?: string;
    private 'kernel_version'?: string;
    public constructor(type?: string, version?: string, kernelVersion?: string) { 
        this['type'] = type;
        this['version'] = version;
        this['kernel_version'] = kernelVersion;
    }
    public withType(type: string): MysqlDatastoreWithKernelVersion {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): MysqlDatastoreWithKernelVersion {
        this['version'] = version;
        return this;
    }
    public withKernelVersion(kernelVersion: string): MysqlDatastoreWithKernelVersion {
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
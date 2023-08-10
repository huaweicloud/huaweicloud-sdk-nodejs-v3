

export class MysqlDatastoreInReq {
    public type?: string;
    public version?: string;
    private 'kernel_version'?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): MysqlDatastoreInReq {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): MysqlDatastoreInReq {
        this['version'] = version;
        return this;
    }
    public withKernelVersion(kernelVersion: string): MysqlDatastoreInReq {
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
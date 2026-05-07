

export class RuntimeServiceInfo {
    private 'runtime_type'?: string;
    private 'runtime_version'?: string;
    private 'storage_driver'?: Array<string>;
    public constructor() { 
    }
    public withRuntimeType(runtimeType: string): RuntimeServiceInfo {
        this['runtime_type'] = runtimeType;
        return this;
    }
    public set runtimeType(runtimeType: string  | undefined) {
        this['runtime_type'] = runtimeType;
    }
    public get runtimeType(): string | undefined {
        return this['runtime_type'];
    }
    public withRuntimeVersion(runtimeVersion: string): RuntimeServiceInfo {
        this['runtime_version'] = runtimeVersion;
        return this;
    }
    public set runtimeVersion(runtimeVersion: string  | undefined) {
        this['runtime_version'] = runtimeVersion;
    }
    public get runtimeVersion(): string | undefined {
        return this['runtime_version'];
    }
    public withStorageDriver(storageDriver: Array<string>): RuntimeServiceInfo {
        this['storage_driver'] = storageDriver;
        return this;
    }
    public set storageDriver(storageDriver: Array<string>  | undefined) {
        this['storage_driver'] = storageDriver;
    }
    public get storageDriver(): Array<string> | undefined {
        return this['storage_driver'];
    }
}
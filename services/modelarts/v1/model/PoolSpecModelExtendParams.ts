

export class PoolSpecModelExtendParams {
    public dockerBaseSize?: string;
    public volumeGroup?: string;
    public runtime?: string;
    public constructor() { 
    }
    public withDockerBaseSize(dockerBaseSize: string): PoolSpecModelExtendParams {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    public withVolumeGroup(volumeGroup: string): PoolSpecModelExtendParams {
        this['volumeGroup'] = volumeGroup;
        return this;
    }
    public withRuntime(runtime: string): PoolSpecModelExtendParams {
        this['runtime'] = runtime;
        return this;
    }
}
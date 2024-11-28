

export class RuntimeRequestBody {
    private 'runtime_name'?: RuntimeRequestBodyRuntimeNameEnum | string;
    private 'runtime_path'?: string;
    public constructor() { 
    }
    public withRuntimeName(runtimeName: RuntimeRequestBodyRuntimeNameEnum | string): RuntimeRequestBody {
        this['runtime_name'] = runtimeName;
        return this;
    }
    public set runtimeName(runtimeName: RuntimeRequestBodyRuntimeNameEnum | string  | undefined) {
        this['runtime_name'] = runtimeName;
    }
    public get runtimeName(): RuntimeRequestBodyRuntimeNameEnum | string | undefined {
        return this['runtime_name'];
    }
    public withRuntimePath(runtimePath: string): RuntimeRequestBody {
        this['runtime_path'] = runtimePath;
        return this;
    }
    public set runtimePath(runtimePath: string  | undefined) {
        this['runtime_path'] = runtimePath;
    }
    public get runtimePath(): string | undefined {
        return this['runtime_path'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuntimeRequestBodyRuntimeNameEnum {
    CRIO_ENDPOINT = 'crio_endpoint',
    CONTAINERD_ENDPOINT = 'containerd_endpoint',
    DOCKER_ENDPOINT = 'docker_endpoint',
    ISULAD_ENDPOINT = 'isulad_endpoint',
    PODMAN_ENDPOINT = 'podman_endpoint'
}

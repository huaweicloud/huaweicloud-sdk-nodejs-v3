

export class ResetNodesRequestNodeConfig {
    public os?: string;
    public name?: string;
    public imageId?: string;
    public imageType?: string;
    public runtime?: ResetNodesRequestNodeConfigRuntimeEnum | string;
    public constructor() { 
    }
    public withOs(os: string): ResetNodesRequestNodeConfig {
        this['os'] = os;
        return this;
    }
    public withName(name: string): ResetNodesRequestNodeConfig {
        this['name'] = name;
        return this;
    }
    public withImageId(imageId: string): ResetNodesRequestNodeConfig {
        this['imageId'] = imageId;
        return this;
    }
    public withImageType(imageType: string): ResetNodesRequestNodeConfig {
        this['imageType'] = imageType;
        return this;
    }
    public withRuntime(runtime: ResetNodesRequestNodeConfigRuntimeEnum | string): ResetNodesRequestNodeConfig {
        this['runtime'] = runtime;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResetNodesRequestNodeConfigRuntimeEnum {
    DOCKER = 'docker',
    CONTAINERD = 'containerd'
}

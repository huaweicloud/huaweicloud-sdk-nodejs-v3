

export class RuntimeStack {
    public name?: string;
    public type?: string;
    public version?: string;
    private 'deploy_mode'?: RuntimeStackDeployModeEnum | string;
    public constructor(name?: string, type?: string, version?: string, deployMode?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['version'] = version;
        this['deploy_mode'] = deployMode;
    }
    public withName(name: string): RuntimeStack {
        this['name'] = name;
        return this;
    }
    public withType(type: string): RuntimeStack {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): RuntimeStack {
        this['version'] = version;
        return this;
    }
    public withDeployMode(deployMode: RuntimeStackDeployModeEnum | string): RuntimeStack {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: RuntimeStackDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): RuntimeStackDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuntimeStackDeployModeEnum {
    CONTAINER = 'container',
    VIRTUALMACHINE = 'virtualmachine'
}

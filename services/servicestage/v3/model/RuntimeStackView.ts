

export class RuntimeStackView {
    public name?: string;
    private 'deploy_mode'?: RuntimeStackViewDeployModeEnum | string;
    public version?: string;
    public type?: RuntimeStackViewTypeEnum | string;
    public status?: RuntimeStackViewStatusEnum | string;
    public constructor() { 
    }
    public withName(name: string): RuntimeStackView {
        this['name'] = name;
        return this;
    }
    public withDeployMode(deployMode: RuntimeStackViewDeployModeEnum | string): RuntimeStackView {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: RuntimeStackViewDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): RuntimeStackViewDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
    public withVersion(version: string): RuntimeStackView {
        this['version'] = version;
        return this;
    }
    public withType(type: RuntimeStackViewTypeEnum | string): RuntimeStackView {
        this['type'] = type;
        return this;
    }
    public withStatus(status: RuntimeStackViewStatusEnum | string): RuntimeStackView {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuntimeStackViewDeployModeEnum {
    CONTAINER = 'container',
    VIRTUALMACHINE = 'virtualmachine'
}
/**
    * @export
    * @enum {string}
    */
export enum RuntimeStackViewTypeEnum {
    NODEJS = 'Nodejs',
    JAVA = 'Java',
    TOMCAT = 'Tomcat',
    DOCKER = 'Docker',
    PHP = 'Php'
}
/**
    * @export
    * @enum {string}
    */
export enum RuntimeStackViewStatusEnum {
    SUPPORTED = 'Supported',
    DEPRECATED = 'Deprecated'
}

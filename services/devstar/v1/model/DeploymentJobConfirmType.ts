

export class DeploymentJobConfirmType {
    public type?: DeploymentJobConfirmTypeTypeEnum;
    public constructor() { 
    }
    public withType(type: DeploymentJobConfirmTypeTypeEnum): DeploymentJobConfirmType {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentJobConfirmTypeTypeEnum {
    STOP = 'stop',
    CONTINUE = 'continue'
}

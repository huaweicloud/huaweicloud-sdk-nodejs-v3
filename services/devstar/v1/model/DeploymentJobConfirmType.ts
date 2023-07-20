

export class DeploymentJobConfirmType {
    public type?: DeploymentJobConfirmTypeTypeEnum | string;
    public constructor() { 
    }
    public withType(type: DeploymentJobConfirmTypeTypeEnum | string): DeploymentJobConfirmType {
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

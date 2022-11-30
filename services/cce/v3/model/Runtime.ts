

export class Runtime {
    public name?: RuntimeNameEnum;
    public constructor() { 
    }
    public withName(name: RuntimeNameEnum): Runtime {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuntimeNameEnum {
    DOCKER = 'docker',
    CONTAINERD = 'containerd'
}



export class Runtime {
    public name?: RuntimeNameEnum | string;
    public constructor() { 
    }
    public withName(name: RuntimeNameEnum | string): Runtime {
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



export class Runtime {
    public name?: RuntimeNameEnum | string;
    public runtimeClass?: RuntimeRuntimeClassEnum | string;
    public constructor() { 
    }
    public withName(name: RuntimeNameEnum | string): Runtime {
        this['name'] = name;
        return this;
    }
    public withRuntimeClass(runtimeClass: RuntimeRuntimeClassEnum | string): Runtime {
        this['runtimeClass'] = runtimeClass;
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
/**
    * @export
    * @enum {string}
    */
export enum RuntimeRuntimeClassEnum {
    RUNC = 'runc',
    KATA = 'kata',
    KUASAR_VMM = 'kuasar-vmm'
}

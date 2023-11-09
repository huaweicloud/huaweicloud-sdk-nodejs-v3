import { ComponentMount } from './ComponentMount';
import { ComponentStorageParameters } from './ComponentStorageParameters';


export class ComponentStorage {
    public type?: ComponentStorageTypeEnum | string;
    public name?: string;
    public parameters?: ComponentStorageParameters;
    public mounts?: Array<ComponentMount>;
    public constructor(type?: string, name?: string, parameters?: ComponentStorageParameters, mounts?: Array<ComponentMount>) { 
        this['type'] = type;
        this['name'] = name;
        this['parameters'] = parameters;
        this['mounts'] = mounts;
    }
    public withType(type: ComponentStorageTypeEnum | string): ComponentStorage {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ComponentStorage {
        this['name'] = name;
        return this;
    }
    public withParameters(parameters: ComponentStorageParameters): ComponentStorage {
        this['parameters'] = parameters;
        return this;
    }
    public withMounts(mounts: Array<ComponentMount>): ComponentStorage {
        this['mounts'] = mounts;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentStorageTypeEnum {
    HOSTPATH = 'HostPath',
    EMPTYDIR = 'EmptyDir',
    CONFIGMAP = 'ConfigMap',
    SECRET = 'Secret',
    PERSISTENTVOLUMECLAIM = 'PersistentVolumeClaim'
}

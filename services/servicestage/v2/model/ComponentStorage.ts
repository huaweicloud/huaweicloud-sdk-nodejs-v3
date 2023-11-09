import { ComponentMount } from './ComponentMount';
import { StorageParameter } from './StorageParameter';


export class ComponentStorage {
    public type?: ComponentStorageTypeEnum | string;
    public parameters?: StorageParameter;
    public mounts?: Array<ComponentMount>;
    public constructor(type?: string, parameters?: StorageParameter, mounts?: Array<ComponentMount>) { 
        this['type'] = type;
        this['parameters'] = parameters;
        this['mounts'] = mounts;
    }
    public withType(type: ComponentStorageTypeEnum | string): ComponentStorage {
        this['type'] = type;
        return this;
    }
    public withParameters(parameters: StorageParameter): ComponentStorage {
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

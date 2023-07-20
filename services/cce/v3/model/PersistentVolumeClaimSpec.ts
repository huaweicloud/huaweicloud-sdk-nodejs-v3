import { ResourceRequirements } from './ResourceRequirements';


export class PersistentVolumeClaimSpec {
    public volumeID?: string;
    public storageType?: string;
    public accessModes?: Array<PersistentVolumeClaimSpecAccessModesEnum> | Array<string>;
    public storageClassName?: string;
    public volumeName?: string;
    public resources?: ResourceRequirements;
    public volumeMode?: string;
    public constructor(volumeID?: string, storageType?: string, accessModes?: Array<string>) { 
        this['volumeID'] = volumeID;
        this['storageType'] = storageType;
        this['accessModes'] = accessModes;
    }
    public withVolumeID(volumeID: string): PersistentVolumeClaimSpec {
        this['volumeID'] = volumeID;
        return this;
    }
    public withStorageType(storageType: string): PersistentVolumeClaimSpec {
        this['storageType'] = storageType;
        return this;
    }
    public withAccessModes(accessModes: Array<PersistentVolumeClaimSpecAccessModesEnum> | Array<string>): PersistentVolumeClaimSpec {
        this['accessModes'] = accessModes;
        return this;
    }
    public withStorageClassName(storageClassName: string): PersistentVolumeClaimSpec {
        this['storageClassName'] = storageClassName;
        return this;
    }
    public withVolumeName(volumeName: string): PersistentVolumeClaimSpec {
        this['volumeName'] = volumeName;
        return this;
    }
    public withResources(resources: ResourceRequirements): PersistentVolumeClaimSpec {
        this['resources'] = resources;
        return this;
    }
    public withVolumeMode(volumeMode: string): PersistentVolumeClaimSpec {
        this['volumeMode'] = volumeMode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PersistentVolumeClaimSpecAccessModesEnum {
    READONLYMANY = 'ReadOnlyMany',
    READWRITEMANY = 'ReadWriteMany'
}

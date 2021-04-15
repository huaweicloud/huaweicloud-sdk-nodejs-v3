import { ResourceRequirements } from './ResourceRequirements';


export class PersistentVolumeClaimSpec {
    public accessModes: Array<PersistentVolumeClaimSpecAccessModesEnum>;
    public resources?: ResourceRequirements;
    public storageClassName?: string;
    public storageType: string;
    public volumeID: string;
    public volumeMode?: string;
    public volumeName?: string;
    public constructor(accessModes?: any, storageType?: any, volumeID?: any) { 
        this['accessModes'] = accessModes;
        this['storageType'] = storageType;
        this['volumeID'] = volumeID;
    }
    public withAccessModes(accessModes: Array<PersistentVolumeClaimSpecAccessModesEnum>): PersistentVolumeClaimSpec {
        this['accessModes'] = accessModes;
        return this;
    }
    public withResources(resources: ResourceRequirements): PersistentVolumeClaimSpec {
        this['resources'] = resources;
        return this;
    }
    public withStorageClassName(storageClassName: string): PersistentVolumeClaimSpec {
        this['storageClassName'] = storageClassName;
        return this;
    }
    public withStorageType(storageType: string): PersistentVolumeClaimSpec {
        this['storageType'] = storageType;
        return this;
    }
    public withVolumeID(volumeID: string): PersistentVolumeClaimSpec {
        this['volumeID'] = volumeID;
        return this;
    }
    public withVolumeMode(volumeMode: string): PersistentVolumeClaimSpec {
        this['volumeMode'] = volumeMode;
        return this;
    }
    public withVolumeName(volumeName: string): PersistentVolumeClaimSpec {
        this['volumeName'] = volumeName;
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

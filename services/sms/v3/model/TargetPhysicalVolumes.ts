

export class TargetPhysicalVolumes {
    public id?: number;
    private 'device_use'?: TargetPhysicalVolumesDeviceUseEnum | undefined;
    private 'file_system'?: string | undefined;
    public index?: number;
    private 'mount_point'?: string | undefined;
    public name?: string;
    public size?: number;
    private 'used_size'?: number | undefined;
    public uuid?: string;
    private 'relation_name'?: string | undefined;
    private 'free_size'?: number | undefined;
    public constructor() { 
    }
    public withId(id: number): TargetPhysicalVolumes {
        this['id'] = id;
        return this;
    }
    public withDeviceUse(deviceUse: TargetPhysicalVolumesDeviceUseEnum): TargetPhysicalVolumes {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: TargetPhysicalVolumesDeviceUseEnum | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse() {
        return this['device_use'];
    }
    public withFileSystem(fileSystem: string): TargetPhysicalVolumes {
        this['file_system'] = fileSystem;
        return this;
    }
    public set fileSystem(fileSystem: string | undefined) {
        this['file_system'] = fileSystem;
    }
    public get fileSystem() {
        return this['file_system'];
    }
    public withIndex(index: number): TargetPhysicalVolumes {
        this['index'] = index;
        return this;
    }
    public withMountPoint(mountPoint: string): TargetPhysicalVolumes {
        this['mount_point'] = mountPoint;
        return this;
    }
    public set mountPoint(mountPoint: string | undefined) {
        this['mount_point'] = mountPoint;
    }
    public get mountPoint() {
        return this['mount_point'];
    }
    public withName(name: string): TargetPhysicalVolumes {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): TargetPhysicalVolumes {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): TargetPhysicalVolumes {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize() {
        return this['used_size'];
    }
    public withUuid(uuid: string): TargetPhysicalVolumes {
        this['uuid'] = uuid;
        return this;
    }
    public withRelationName(relationName: string): TargetPhysicalVolumes {
        this['relation_name'] = relationName;
        return this;
    }
    public set relationName(relationName: string | undefined) {
        this['relation_name'] = relationName;
    }
    public get relationName() {
        return this['relation_name'];
    }
    public withFreeSize(freeSize: number): TargetPhysicalVolumes {
        this['free_size'] = freeSize;
        return this;
    }
    public set freeSize(freeSize: number | undefined) {
        this['free_size'] = freeSize;
    }
    public get freeSize() {
        return this['free_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TargetPhysicalVolumesDeviceUseEnum {
    NORMAL = 'NORMAL',
    OS = 'OS',
    BOOT = 'BOOT'
}



export class PhysicalVolumes {
    private 'device_use'?: string | undefined;
    private 'file_system'?: string | undefined;
    public index?: number;
    private 'mount_point'?: string | undefined;
    public name?: string;
    public size?: number;
    private 'inode_size'?: number | undefined;
    private 'used_size'?: number | undefined;
    public uuid?: string;
    public constructor() { 
    }
    public withDeviceUse(deviceUse: string): PhysicalVolumes {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: string | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse() {
        return this['device_use'];
    }
    public withFileSystem(fileSystem: string): PhysicalVolumes {
        this['file_system'] = fileSystem;
        return this;
    }
    public set fileSystem(fileSystem: string | undefined) {
        this['file_system'] = fileSystem;
    }
    public get fileSystem() {
        return this['file_system'];
    }
    public withIndex(index: number): PhysicalVolumes {
        this['index'] = index;
        return this;
    }
    public withMountPoint(mountPoint: string): PhysicalVolumes {
        this['mount_point'] = mountPoint;
        return this;
    }
    public set mountPoint(mountPoint: string | undefined) {
        this['mount_point'] = mountPoint;
    }
    public get mountPoint() {
        return this['mount_point'];
    }
    public withName(name: string): PhysicalVolumes {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): PhysicalVolumes {
        this['size'] = size;
        return this;
    }
    public withInodeSize(inodeSize: number): PhysicalVolumes {
        this['inode_size'] = inodeSize;
        return this;
    }
    public set inodeSize(inodeSize: number | undefined) {
        this['inode_size'] = inodeSize;
    }
    public get inodeSize() {
        return this['inode_size'];
    }
    public withUsedSize(usedSize: number): PhysicalVolumes {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize() {
        return this['used_size'];
    }
    public withUuid(uuid: string): PhysicalVolumes {
        this['uuid'] = uuid;
        return this;
    }
}
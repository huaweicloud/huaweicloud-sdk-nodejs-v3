

export class PhysicalVolume {
    private 'device_use'?: string | undefined;
    private 'file_system'?: string | undefined;
    public index?: number;
    private 'mount_point'?: string | undefined;
    public name?: string;
    public size?: number;
    private 'used_size'?: number | undefined;
    private 'inode_size'?: number | undefined;
    public uuid?: string;
    private 'size_per_cluster'?: number | undefined;
    public constructor() { 
    }
    public withDeviceUse(deviceUse: string): PhysicalVolume {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: string | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse() {
        return this['device_use'];
    }
    public withFileSystem(fileSystem: string): PhysicalVolume {
        this['file_system'] = fileSystem;
        return this;
    }
    public set fileSystem(fileSystem: string | undefined) {
        this['file_system'] = fileSystem;
    }
    public get fileSystem() {
        return this['file_system'];
    }
    public withIndex(index: number): PhysicalVolume {
        this['index'] = index;
        return this;
    }
    public withMountPoint(mountPoint: string): PhysicalVolume {
        this['mount_point'] = mountPoint;
        return this;
    }
    public set mountPoint(mountPoint: string | undefined) {
        this['mount_point'] = mountPoint;
    }
    public get mountPoint() {
        return this['mount_point'];
    }
    public withName(name: string): PhysicalVolume {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): PhysicalVolume {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): PhysicalVolume {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize() {
        return this['used_size'];
    }
    public withInodeSize(inodeSize: number): PhysicalVolume {
        this['inode_size'] = inodeSize;
        return this;
    }
    public set inodeSize(inodeSize: number | undefined) {
        this['inode_size'] = inodeSize;
    }
    public get inodeSize() {
        return this['inode_size'];
    }
    public withUuid(uuid: string): PhysicalVolume {
        this['uuid'] = uuid;
        return this;
    }
    public withSizePerCluster(sizePerCluster: number): PhysicalVolume {
        this['size_per_cluster'] = sizePerCluster;
        return this;
    }
    public set sizePerCluster(sizePerCluster: number | undefined) {
        this['size_per_cluster'] = sizePerCluster;
    }
    public get sizePerCluster() {
        return this['size_per_cluster'];
    }
}
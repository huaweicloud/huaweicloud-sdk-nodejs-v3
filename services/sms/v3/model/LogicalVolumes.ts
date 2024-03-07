

export class LogicalVolumes {
    private 'block_count'?: number;
    private 'block_size'?: number;
    private 'file_system'?: string;
    private 'inode_size'?: number;
    private 'device_use'?: string;
    private 'mount_point'?: string;
    public name?: string;
    public size?: number;
    private 'used_size'?: number;
    private 'free_size'?: number;
    public constructor(fileSystem?: string, inodeSize?: number, mountPoint?: string, name?: string, size?: number, usedSize?: number, freeSize?: number) { 
        this['file_system'] = fileSystem;
        this['inode_size'] = inodeSize;
        this['mount_point'] = mountPoint;
        this['name'] = name;
        this['size'] = size;
        this['used_size'] = usedSize;
        this['free_size'] = freeSize;
    }
    public withBlockCount(blockCount: number): LogicalVolumes {
        this['block_count'] = blockCount;
        return this;
    }
    public set blockCount(blockCount: number  | undefined) {
        this['block_count'] = blockCount;
    }
    public get blockCount(): number | undefined {
        return this['block_count'];
    }
    public withBlockSize(blockSize: number): LogicalVolumes {
        this['block_size'] = blockSize;
        return this;
    }
    public set blockSize(blockSize: number  | undefined) {
        this['block_size'] = blockSize;
    }
    public get blockSize(): number | undefined {
        return this['block_size'];
    }
    public withFileSystem(fileSystem: string): LogicalVolumes {
        this['file_system'] = fileSystem;
        return this;
    }
    public set fileSystem(fileSystem: string  | undefined) {
        this['file_system'] = fileSystem;
    }
    public get fileSystem(): string | undefined {
        return this['file_system'];
    }
    public withInodeSize(inodeSize: number): LogicalVolumes {
        this['inode_size'] = inodeSize;
        return this;
    }
    public set inodeSize(inodeSize: number  | undefined) {
        this['inode_size'] = inodeSize;
    }
    public get inodeSize(): number | undefined {
        return this['inode_size'];
    }
    public withDeviceUse(deviceUse: string): LogicalVolumes {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: string  | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse(): string | undefined {
        return this['device_use'];
    }
    public withMountPoint(mountPoint: string): LogicalVolumes {
        this['mount_point'] = mountPoint;
        return this;
    }
    public set mountPoint(mountPoint: string  | undefined) {
        this['mount_point'] = mountPoint;
    }
    public get mountPoint(): string | undefined {
        return this['mount_point'];
    }
    public withName(name: string): LogicalVolumes {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): LogicalVolumes {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): LogicalVolumes {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
    public withFreeSize(freeSize: number): LogicalVolumes {
        this['free_size'] = freeSize;
        return this;
    }
    public set freeSize(freeSize: number  | undefined) {
        this['free_size'] = freeSize;
    }
    public get freeSize(): number | undefined {
        return this['free_size'];
    }
}
import { PhysicalVolume } from './PhysicalVolume';


export class ServerDisk {
    public name?: string;
    private 'partition_style'?: string;
    private 'device_use'?: string;
    public size?: number;
    private 'used_size'?: number;
    private 'physical_volumes'?: Array<PhysicalVolume>;
    private 'os_disk'?: boolean;
    private 'relation_name'?: string;
    private 'inode_size'?: number;
    public constructor() { 
    }
    public withName(name: string): ServerDisk {
        this['name'] = name;
        return this;
    }
    public withPartitionStyle(partitionStyle: string): ServerDisk {
        this['partition_style'] = partitionStyle;
        return this;
    }
    public set partitionStyle(partitionStyle: string  | undefined) {
        this['partition_style'] = partitionStyle;
    }
    public get partitionStyle(): string | undefined {
        return this['partition_style'];
    }
    public withDeviceUse(deviceUse: string): ServerDisk {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: string  | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse(): string | undefined {
        return this['device_use'];
    }
    public withSize(size: number): ServerDisk {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): ServerDisk {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
    public withPhysicalVolumes(physicalVolumes: Array<PhysicalVolume>): ServerDisk {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PhysicalVolume>  | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes(): Array<PhysicalVolume> | undefined {
        return this['physical_volumes'];
    }
    public withOsDisk(osDisk: boolean): ServerDisk {
        this['os_disk'] = osDisk;
        return this;
    }
    public set osDisk(osDisk: boolean  | undefined) {
        this['os_disk'] = osDisk;
    }
    public get osDisk(): boolean | undefined {
        return this['os_disk'];
    }
    public withRelationName(relationName: string): ServerDisk {
        this['relation_name'] = relationName;
        return this;
    }
    public set relationName(relationName: string  | undefined) {
        this['relation_name'] = relationName;
    }
    public get relationName(): string | undefined {
        return this['relation_name'];
    }
    public withInodeSize(inodeSize: number): ServerDisk {
        this['inode_size'] = inodeSize;
        return this;
    }
    public set inodeSize(inodeSize: number  | undefined) {
        this['inode_size'] = inodeSize;
    }
    public get inodeSize(): number | undefined {
        return this['inode_size'];
    }
}
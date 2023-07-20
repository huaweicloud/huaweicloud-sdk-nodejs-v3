import { TargetPhysicalVolumes } from './TargetPhysicalVolumes';


export class TargetDisk {
    public id?: number;
    private 'device_use'?: TargetDiskDeviceUseEnum | string;
    private 'disk_id'?: string;
    public name?: string;
    private 'physical_volumes'?: Array<TargetPhysicalVolumes>;
    public size?: number;
    private 'used_size'?: number;
    private 'disk_index'?: string;
    private 'os_disk'?: boolean;
    private 'partition_style'?: TargetDiskPartitionStyleEnum | string;
    private 'relation_name'?: string;
    public constructor() { 
    }
    public withId(id: number): TargetDisk {
        this['id'] = id;
        return this;
    }
    public withDeviceUse(deviceUse: TargetDiskDeviceUseEnum | string): TargetDisk {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: TargetDiskDeviceUseEnum | string  | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse(): TargetDiskDeviceUseEnum | string | undefined {
        return this['device_use'];
    }
    public withDiskId(diskId: string): TargetDisk {
        this['disk_id'] = diskId;
        return this;
    }
    public set diskId(diskId: string  | undefined) {
        this['disk_id'] = diskId;
    }
    public get diskId(): string | undefined {
        return this['disk_id'];
    }
    public withName(name: string): TargetDisk {
        this['name'] = name;
        return this;
    }
    public withPhysicalVolumes(physicalVolumes: Array<TargetPhysicalVolumes>): TargetDisk {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<TargetPhysicalVolumes>  | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes(): Array<TargetPhysicalVolumes> | undefined {
        return this['physical_volumes'];
    }
    public withSize(size: number): TargetDisk {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): TargetDisk {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
    public withDiskIndex(diskIndex: string): TargetDisk {
        this['disk_index'] = diskIndex;
        return this;
    }
    public set diskIndex(diskIndex: string  | undefined) {
        this['disk_index'] = diskIndex;
    }
    public get diskIndex(): string | undefined {
        return this['disk_index'];
    }
    public withOsDisk(osDisk: boolean): TargetDisk {
        this['os_disk'] = osDisk;
        return this;
    }
    public set osDisk(osDisk: boolean  | undefined) {
        this['os_disk'] = osDisk;
    }
    public get osDisk(): boolean | undefined {
        return this['os_disk'];
    }
    public withPartitionStyle(partitionStyle: TargetDiskPartitionStyleEnum | string): TargetDisk {
        this['partition_style'] = partitionStyle;
        return this;
    }
    public set partitionStyle(partitionStyle: TargetDiskPartitionStyleEnum | string  | undefined) {
        this['partition_style'] = partitionStyle;
    }
    public get partitionStyle(): TargetDiskPartitionStyleEnum | string | undefined {
        return this['partition_style'];
    }
    public withRelationName(relationName: string): TargetDisk {
        this['relation_name'] = relationName;
        return this;
    }
    public set relationName(relationName: string  | undefined) {
        this['relation_name'] = relationName;
    }
    public get relationName(): string | undefined {
        return this['relation_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TargetDiskDeviceUseEnum {
    NORMAL = 'NORMAL',
    OS = 'OS',
    BOOT = 'BOOT'
}
/**
    * @export
    * @enum {string}
    */
export enum TargetDiskPartitionStyleEnum {
    MBR = 'MBR',
    GPT = 'GPT'
}

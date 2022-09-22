import { PhysicalVolumes } from './PhysicalVolumes';


export class Disk {
    public name: string;
    private 'partition_style'?: DiskPartitionStyleEnum | undefined;
    private 'device_use': DiskDeviceUseEnum | undefined;
    public size: number;
    private 'used_size': number | undefined;
    private 'physical_volumes': Array<PhysicalVolumes> | undefined;
    private 'disk_id'?: string | undefined;
    private 'os_disk'?: boolean | undefined;
    private 'relation_name'?: string | undefined;
    public constructor(name?: any, deviceUse?: any, size?: any, usedSize?: any, physicalVolumes?: any) { 
        this['name'] = name;
        this['device_use'] = deviceUse;
        this['size'] = size;
        this['used_size'] = usedSize;
        this['physical_volumes'] = physicalVolumes;
    }
    public withName(name: string): Disk {
        this['name'] = name;
        return this;
    }
    public withPartitionStyle(partitionStyle: DiskPartitionStyleEnum): Disk {
        this['partition_style'] = partitionStyle;
        return this;
    }
    public set partitionStyle(partitionStyle: DiskPartitionStyleEnum | undefined) {
        this['partition_style'] = partitionStyle;
    }
    public get partitionStyle() {
        return this['partition_style'];
    }
    public withDeviceUse(deviceUse: DiskDeviceUseEnum): Disk {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: DiskDeviceUseEnum | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse() {
        return this['device_use'];
    }
    public withSize(size: number): Disk {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): Disk {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize() {
        return this['used_size'];
    }
    public withPhysicalVolumes(physicalVolumes: Array<PhysicalVolumes>): Disk {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PhysicalVolumes> | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes() {
        return this['physical_volumes'];
    }
    public withDiskId(diskId: string): Disk {
        this['disk_id'] = diskId;
        return this;
    }
    public set diskId(diskId: string | undefined) {
        this['disk_id'] = diskId;
    }
    public get diskId() {
        return this['disk_id'];
    }
    public withOsDisk(osDisk: boolean): Disk {
        this['os_disk'] = osDisk;
        return this;
    }
    public set osDisk(osDisk: boolean | undefined) {
        this['os_disk'] = osDisk;
    }
    public get osDisk() {
        return this['os_disk'];
    }
    public withRelationName(relationName: string): Disk {
        this['relation_name'] = relationName;
        return this;
    }
    public set relationName(relationName: string | undefined) {
        this['relation_name'] = relationName;
    }
    public get relationName() {
        return this['relation_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiskPartitionStyleEnum {
    MBR = 'MBR',
    GPT = 'GPT'
}
/**
    * @export
    * @enum {string}
    */
export enum DiskDeviceUseEnum {
    BOOT = 'BOOT',
    OS = 'OS'
}

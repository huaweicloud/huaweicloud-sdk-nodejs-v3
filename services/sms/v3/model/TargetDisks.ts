import { PhysicalVolumes } from './PhysicalVolumes';


export class TargetDisks {
    private 'device_use'?: TargetDisksDeviceUseEnum | string;
    private 'disk_id'?: string;
    public name?: string;
    private 'physical_volumes'?: Array<PhysicalVolumes>;
    public size?: number;
    private 'used_size'?: number;
    public constructor(name?: string, physicalVolumes?: Array<PhysicalVolumes>, size?: number, usedSize?: number) { 
        this['name'] = name;
        this['physical_volumes'] = physicalVolumes;
        this['size'] = size;
        this['used_size'] = usedSize;
    }
    public withDeviceUse(deviceUse: TargetDisksDeviceUseEnum | string): TargetDisks {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: TargetDisksDeviceUseEnum | string  | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse(): TargetDisksDeviceUseEnum | string | undefined {
        return this['device_use'];
    }
    public withDiskId(diskId: string): TargetDisks {
        this['disk_id'] = diskId;
        return this;
    }
    public set diskId(diskId: string  | undefined) {
        this['disk_id'] = diskId;
    }
    public get diskId(): string | undefined {
        return this['disk_id'];
    }
    public withName(name: string): TargetDisks {
        this['name'] = name;
        return this;
    }
    public withPhysicalVolumes(physicalVolumes: Array<PhysicalVolumes>): TargetDisks {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PhysicalVolumes>  | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes(): Array<PhysicalVolumes> | undefined {
        return this['physical_volumes'];
    }
    public withSize(size: number): TargetDisks {
        this['size'] = size;
        return this;
    }
    public withUsedSize(usedSize: number): TargetDisks {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TargetDisksDeviceUseEnum {
    NORMAL = 'NORMAL',
    OS = 'OS',
    BOOT = 'BOOT'
}

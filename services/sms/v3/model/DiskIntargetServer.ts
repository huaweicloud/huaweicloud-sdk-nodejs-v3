import { PhysicalVolumes } from './PhysicalVolumes';


export class DiskIntargetServer {
    public name?: string;
    public size?: number;
    private 'device_use'?: DiskIntargetServerDeviceUseEnum | string;
    private 'used_size'?: number;
    private 'physical_volumes'?: Array<PhysicalVolumes>;
    public constructor(name?: string, size?: number) { 
        this['name'] = name;
        this['size'] = size;
    }
    public withName(name: string): DiskIntargetServer {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): DiskIntargetServer {
        this['size'] = size;
        return this;
    }
    public withDeviceUse(deviceUse: DiskIntargetServerDeviceUseEnum | string): DiskIntargetServer {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: DiskIntargetServerDeviceUseEnum | string  | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse(): DiskIntargetServerDeviceUseEnum | string | undefined {
        return this['device_use'];
    }
    public withUsedSize(usedSize: number): DiskIntargetServer {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
    public withPhysicalVolumes(physicalVolumes: Array<PhysicalVolumes>): DiskIntargetServer {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PhysicalVolumes>  | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes(): Array<PhysicalVolumes> | undefined {
        return this['physical_volumes'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiskIntargetServerDeviceUseEnum {
    BOOT = 'BOOT',
    OS = 'OS',
    NORMAL = 'NORMAL'
}

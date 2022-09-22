import { PhysicalVolumes } from './PhysicalVolumes';


export class DiskIntargetServer {
    public name: string;
    public size: number;
    private 'device_use'?: DiskIntargetServerDeviceUseEnum | undefined;
    private 'used_size'?: number | undefined;
    private 'physical_volumes'?: Array<PhysicalVolumes> | undefined;
    public constructor(name?: any, size?: any) { 
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
    public withDeviceUse(deviceUse: DiskIntargetServerDeviceUseEnum): DiskIntargetServer {
        this['device_use'] = deviceUse;
        return this;
    }
    public set deviceUse(deviceUse: DiskIntargetServerDeviceUseEnum | undefined) {
        this['device_use'] = deviceUse;
    }
    public get deviceUse() {
        return this['device_use'];
    }
    public withUsedSize(usedSize: number): DiskIntargetServer {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize() {
        return this['used_size'];
    }
    public withPhysicalVolumes(physicalVolumes: Array<PhysicalVolumes>): DiskIntargetServer {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PhysicalVolumes> | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes() {
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

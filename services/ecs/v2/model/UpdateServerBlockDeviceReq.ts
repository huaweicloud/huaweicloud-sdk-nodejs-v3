import { UpdateServerBlockDeviceOption } from './UpdateServerBlockDeviceOption';


export class UpdateServerBlockDeviceReq {
    private 'block_device': UpdateServerBlockDeviceOption | undefined;
    public constructor(blockDevice?: any) { 
        this['block_device'] = blockDevice;
    }
    public withBlockDevice(blockDevice: UpdateServerBlockDeviceOption): UpdateServerBlockDeviceReq {
        this['block_device'] = blockDevice;
        return this;
    }
    public set blockDevice(blockDevice: UpdateServerBlockDeviceOption | undefined) {
        this['block_device'] = blockDevice;
    }
    public get blockDevice() {
        return this['block_device'];
    }
}
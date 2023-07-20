import { UpdateServerBlockDeviceOption } from './UpdateServerBlockDeviceOption';


export class UpdateServerBlockDeviceReq {
    private 'block_device'?: UpdateServerBlockDeviceOption;
    public constructor(blockDevice?: UpdateServerBlockDeviceOption) { 
        this['block_device'] = blockDevice;
    }
    public withBlockDevice(blockDevice: UpdateServerBlockDeviceOption): UpdateServerBlockDeviceReq {
        this['block_device'] = blockDevice;
        return this;
    }
    public set blockDevice(blockDevice: UpdateServerBlockDeviceOption  | undefined) {
        this['block_device'] = blockDevice;
    }
    public get blockDevice(): UpdateServerBlockDeviceOption | undefined {
        return this['block_device'];
    }
}
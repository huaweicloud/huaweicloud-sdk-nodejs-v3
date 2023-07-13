

export class BlockDeviceAttachableQuantity {
    private 'free_scsi'?: number | undefined;
    private 'free_blk'?: number | undefined;
    private 'free_disk'?: number | undefined;
    public constructor() { 
    }
    public withFreeScsi(freeScsi: number): BlockDeviceAttachableQuantity {
        this['free_scsi'] = freeScsi;
        return this;
    }
    public set freeScsi(freeScsi: number | undefined) {
        this['free_scsi'] = freeScsi;
    }
    public get freeScsi() {
        return this['free_scsi'];
    }
    public withFreeBlk(freeBlk: number): BlockDeviceAttachableQuantity {
        this['free_blk'] = freeBlk;
        return this;
    }
    public set freeBlk(freeBlk: number | undefined) {
        this['free_blk'] = freeBlk;
    }
    public get freeBlk() {
        return this['free_blk'];
    }
    public withFreeDisk(freeDisk: number): BlockDeviceAttachableQuantity {
        this['free_disk'] = freeDisk;
        return this;
    }
    public set freeDisk(freeDisk: number | undefined) {
        this['free_disk'] = freeDisk;
    }
    public get freeDisk() {
        return this['free_disk'];
    }
}
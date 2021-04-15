

export class ServerAttachableQuantity {
    private 'free_scsi': number | undefined;
    private 'free_blk': number | undefined;
    private 'free_disk': number | undefined;
    private 'free_nic': number | undefined;
    public constructor(freeScsi?: any, freeBlk?: any, freeDisk?: any, freeNic?: any) { 
        this['free_scsi'] = freeScsi;
        this['free_blk'] = freeBlk;
        this['free_disk'] = freeDisk;
        this['free_nic'] = freeNic;
    }
    public withFreeScsi(freeScsi: number): ServerAttachableQuantity {
        this['free_scsi'] = freeScsi;
        return this;
    }
    public set freeScsi(freeScsi: number | undefined) {
        this['free_scsi'] = freeScsi;
    }
    public get freeScsi() {
        return this['free_scsi'];
    }
    public withFreeBlk(freeBlk: number): ServerAttachableQuantity {
        this['free_blk'] = freeBlk;
        return this;
    }
    public set freeBlk(freeBlk: number | undefined) {
        this['free_blk'] = freeBlk;
    }
    public get freeBlk() {
        return this['free_blk'];
    }
    public withFreeDisk(freeDisk: number): ServerAttachableQuantity {
        this['free_disk'] = freeDisk;
        return this;
    }
    public set freeDisk(freeDisk: number | undefined) {
        this['free_disk'] = freeDisk;
    }
    public get freeDisk() {
        return this['free_disk'];
    }
    public withFreeNic(freeNic: number): ServerAttachableQuantity {
        this['free_nic'] = freeNic;
        return this;
    }
    public set freeNic(freeNic: number | undefined) {
        this['free_nic'] = freeNic;
    }
    public get freeNic() {
        return this['free_nic'];
    }
}
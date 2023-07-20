

export class ServerAttachableQuantity {
    private 'free_scsi'?: number;
    private 'free_blk'?: number;
    private 'free_disk'?: number;
    private 'free_nic'?: number;
    public constructor(freeScsi?: number, freeBlk?: number, freeDisk?: number, freeNic?: number) { 
        this['free_scsi'] = freeScsi;
        this['free_blk'] = freeBlk;
        this['free_disk'] = freeDisk;
        this['free_nic'] = freeNic;
    }
    public withFreeScsi(freeScsi: number): ServerAttachableQuantity {
        this['free_scsi'] = freeScsi;
        return this;
    }
    public set freeScsi(freeScsi: number  | undefined) {
        this['free_scsi'] = freeScsi;
    }
    public get freeScsi(): number | undefined {
        return this['free_scsi'];
    }
    public withFreeBlk(freeBlk: number): ServerAttachableQuantity {
        this['free_blk'] = freeBlk;
        return this;
    }
    public set freeBlk(freeBlk: number  | undefined) {
        this['free_blk'] = freeBlk;
    }
    public get freeBlk(): number | undefined {
        return this['free_blk'];
    }
    public withFreeDisk(freeDisk: number): ServerAttachableQuantity {
        this['free_disk'] = freeDisk;
        return this;
    }
    public set freeDisk(freeDisk: number  | undefined) {
        this['free_disk'] = freeDisk;
    }
    public get freeDisk(): number | undefined {
        return this['free_disk'];
    }
    public withFreeNic(freeNic: number): ServerAttachableQuantity {
        this['free_nic'] = freeNic;
        return this;
    }
    public set freeNic(freeNic: number  | undefined) {
        this['free_nic'] = freeNic;
    }
    public get freeNic(): number | undefined {
        return this['free_nic'];
    }
}
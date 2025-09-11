

export class AttachableQuantityForNic {
    private 'free_efi_nic'?: number;
    private 'free_scsi'?: number;
    private 'free_blk'?: number;
    private 'free_disk'?: number;
    private 'free_nic'?: number;
    public constructor() { 
    }
    public withFreeEfiNic(freeEfiNic: number): AttachableQuantityForNic {
        this['free_efi_nic'] = freeEfiNic;
        return this;
    }
    public set freeEfiNic(freeEfiNic: number  | undefined) {
        this['free_efi_nic'] = freeEfiNic;
    }
    public get freeEfiNic(): number | undefined {
        return this['free_efi_nic'];
    }
    public withFreeScsi(freeScsi: number): AttachableQuantityForNic {
        this['free_scsi'] = freeScsi;
        return this;
    }
    public set freeScsi(freeScsi: number  | undefined) {
        this['free_scsi'] = freeScsi;
    }
    public get freeScsi(): number | undefined {
        return this['free_scsi'];
    }
    public withFreeBlk(freeBlk: number): AttachableQuantityForNic {
        this['free_blk'] = freeBlk;
        return this;
    }
    public set freeBlk(freeBlk: number  | undefined) {
        this['free_blk'] = freeBlk;
    }
    public get freeBlk(): number | undefined {
        return this['free_blk'];
    }
    public withFreeDisk(freeDisk: number): AttachableQuantityForNic {
        this['free_disk'] = freeDisk;
        return this;
    }
    public set freeDisk(freeDisk: number  | undefined) {
        this['free_disk'] = freeDisk;
    }
    public get freeDisk(): number | undefined {
        return this['free_disk'];
    }
    public withFreeNic(freeNic: number): AttachableQuantityForNic {
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
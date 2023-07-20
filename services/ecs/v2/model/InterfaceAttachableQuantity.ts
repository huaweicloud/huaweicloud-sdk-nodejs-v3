

export class InterfaceAttachableQuantity {
    private 'free_nic'?: number;
    public constructor() { 
    }
    public withFreeNic(freeNic: number): InterfaceAttachableQuantity {
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
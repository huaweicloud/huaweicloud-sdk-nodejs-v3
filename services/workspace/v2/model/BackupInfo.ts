

export class BackupInfo {
    public priority?: number;
    public address?: string;
    private 'address_custom'?: string;
    public constructor(priority?: number, address?: string) { 
        this['priority'] = priority;
        this['address'] = address;
    }
    public withPriority(priority: number): BackupInfo {
        this['priority'] = priority;
        return this;
    }
    public withAddress(address: string): BackupInfo {
        this['address'] = address;
        return this;
    }
    public withAddressCustom(addressCustom: string): BackupInfo {
        this['address_custom'] = addressCustom;
        return this;
    }
    public set addressCustom(addressCustom: string  | undefined) {
        this['address_custom'] = addressCustom;
    }
    public get addressCustom(): string | undefined {
        return this['address_custom'];
    }
}
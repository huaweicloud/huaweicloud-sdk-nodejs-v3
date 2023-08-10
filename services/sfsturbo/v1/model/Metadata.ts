

export class Metadata {
    private 'crypt_key_id'?: string;
    private 'dedicated_flavor'?: string;
    private 'dedicated_storage_id'?: string;
    private 'expand_type'?: string;
    private 'hpc_bw'?: string;
    public constructor() { 
    }
    public withCryptKeyId(cryptKeyId: string): Metadata {
        this['crypt_key_id'] = cryptKeyId;
        return this;
    }
    public set cryptKeyId(cryptKeyId: string  | undefined) {
        this['crypt_key_id'] = cryptKeyId;
    }
    public get cryptKeyId(): string | undefined {
        return this['crypt_key_id'];
    }
    public withDedicatedFlavor(dedicatedFlavor: string): Metadata {
        this['dedicated_flavor'] = dedicatedFlavor;
        return this;
    }
    public set dedicatedFlavor(dedicatedFlavor: string  | undefined) {
        this['dedicated_flavor'] = dedicatedFlavor;
    }
    public get dedicatedFlavor(): string | undefined {
        return this['dedicated_flavor'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): Metadata {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withExpandType(expandType: string): Metadata {
        this['expand_type'] = expandType;
        return this;
    }
    public set expandType(expandType: string  | undefined) {
        this['expand_type'] = expandType;
    }
    public get expandType(): string | undefined {
        return this['expand_type'];
    }
    public withHpcBw(hpcBw: string): Metadata {
        this['hpc_bw'] = hpcBw;
        return this;
    }
    public set hpcBw(hpcBw: string  | undefined) {
        this['hpc_bw'] = hpcBw;
    }
    public get hpcBw(): string | undefined {
        return this['hpc_bw'];
    }
}